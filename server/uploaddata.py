import os
import random
import numpy as np
import cv2


class Filepath:
 fnUpload ='../data/words/'
 fnWord='../data/words.txt'

class UploadData:
    def __int__(self, imgs, imgdata):
            if not os.path.exists(Filepath.fnUpload+'add/'):
                os.mkdir(Filepath.fnUpload+'add/')
            self.imgs= imgs
            self.imgdata = imgdata
            f = open(Filepath.fnWord)
             