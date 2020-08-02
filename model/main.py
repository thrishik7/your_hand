import sys
import argparse
import cv2
from Model import Model, DecoderType
from DataLoader import DataLoader, Batch
from SamplePreprocessor import preprocess
import editdistance

class FilePaths:
    fnCharList= '../data/charList.txt'
    fnTrain ='../data/'
    fnAccuracy='../data/accuracy.txt'
    fnInfer='../data/test.png'
    fnCorpus= '../data/corpus.txt'

def main():
    parser= argparse.ArgumentParser()
    parser.add_argument('--train', help='train the NN', action='store_true')
    parser.add_argument('--validate', help='validate the NN', action='store_true')
    parser.add_argument('--beamsearch', help='use beam search instead of best path decoding', action='store_true')
    parser.add_argument('--wordbeamsearch', help='use word beam search instead of best path decoding', action='store_true')

    args = parser.parse_args() 
    decoderType =DecoderType.BestPath
    if args.beamsearch:
        decoderType= DecoderType.BeamSearch
    elif args.wordbeamsearch:
        decoderType= DecoderType.WordBeamSearch
    
    if args.train or args.validate:

        loader = DataLoader(FilePaths.fnTrain, Model.batchSize, Model.imgSize, Model.maxTextLen)
        open(FilePaths.fnCharList, 'w').write(str().join(loader.charList))
        open(FilePaths.fnCorpus,'w').write(str(' ').join(loader.trainWords+ loader.validationWords))
        if args.train: 
                model = Model(loader.charList, decoderType)
                train(model, loader)
        elif args.validate:
                model = Model(loader.charList, decoderType, mustRestore=True)
                validate(model, loader)
    else:
        print(open(FilePaths.fnAccuracy).read())
        model = Model(open(FilePaths.fnCharList).read(), decoderType, mustRestore=True)
        infer(model, FilePaths.fnInfer)
def train(model,loader):        
        epoch =0
        bestCharErrorRate = float('inf')
        noImprovementSince= 0
        earlyStopping = 5
        while True:
            epoch += 1
            print('Epoch:', epoch)
            
            print('Train NN')
            loader.trainSet()
            while loader.hasNext():
                iterInfo = loader.getIteratorInfo() 
                batch = loader.getNext()
                loss= model.trainBatch(batch)
                print('Batch: ', iterInfo[0],'/', iterInfo[1], 'Loss:',loss)
                
            charErrorRate =validate(model, loader)
            if charErrorRate < bestCharErrorRate:
                print('Character error rate improved, save model')
                bestCharErrorRate=charErrorRate
                noImprovementSince=0
                model.save()
                open(FilePaths.fnAccuracy,'w').write('Validation character error rate of saved model: %f%%'% (charErrorRate*100.0))
            else :
                print ('character error rate not improved')
                noImprovementSince+=1
        
            if noImprovementSince>=earlyStopping:
                print('No more improvement since %d epochs.Training stopped' % earlyStopping)
                break

def validate(model, loader):
    print('Validate NN')
    loader.validationSet()
    numCharErr =0
    numCharTotal =0
    numWordOK= 0
    numWordTotal =0
    while loader.hasNext():
        iterInfo = loader.getIteratorInfo()
        print('Batch:', iterInfo[0],'/',iterInfo[1])
        batch= loader.getNext()
        recognized = model.inferBatch(batch)

        print('Ground truth -> Recognized')

        for i in range(len(recognized)):
            numWordOK += 1 if batch.gtTexts[i] == recognized[i] else 0
            numWordTotal += 1
            dist = editdistance.eval(recognized[i], batch.gtTexts[i])
            numCharErr += dist
            numCharTotal += len(batch.gtTexts[i])
            print('[OK]' if dist==0 else '[ERR:%d]' % dist,'"' + batch.gtTexts[i] + '"', '->', '"' + recognized[i] + '"')
    
        charErrorRate = numCharErr / numCharTotal
        wordAccuracy = numWordOK / numWordTotal
        print('Character error rate: %f%%. Word accuracy: %f%%.' % (charErrorRate*100.0, wordAccuracy*100.0))
        return charErrorRate



def infer(model, fnImg):
    imgs= preprocess(cv2.imread(fnImg, cv2.IMREAD_GRAYSCALE), Model.imgSize, True, False)
    print('Recognized: ')
    text=""
    for img in imgs :
        batch = Batch(None, [img])
        recognized= model.inferBatch(batch, True)
        text=text+" "+recognized[0];
    print(text)
    return text


if __name__ =='__main__':
    main() 