import sys 
import numpy as np 
from PIL import Image
from PIL import ImageColor
from PIL import ImageDraw
from PIL import ImageFont
from PIL import ImageOps
import math
import time

import cv2
import os

import tensorflow as tf 
import matplotlib.pyplot as plt


def wordSegmentation(img, kernelSize= 801, sigma=11, theta= 7, minArea=100):
    
    kernel = createKernel(kernelSize, sigma, theta)
    imgFiltered = cv2.filter2D(img, -1, kernel, borderType=cv2.BORDER_REPLICATE).astype(np.uint8)
    (_, imgThres) = cv2.threshold(imgFiltered, 0, 255, cv2.THRESH_BINARY+cv2.THRESH_OTSU)
    imgThres = 255 - imgThres
    (major, minor, _) = cv2.__version__.split(".")

    if major=='3':
        (_, components, _) = cv2.findContours(imgThres, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    else:
        (components, _) = cv2.findContours(imgThres, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    res =[]
    res1=[]
    i=0
   
    for c in components:
            if cv2.contourArea(c) < minArea:
                continue

           
            i+=1
            currBox = cv2.boundingRect(c)
            (x, y, w, h) = currBox
            currImg = img[y:y+h, x:x+w]
            res.append((currImg))
            res1.append((currBox, currImg))
    
    if not os.path.exists('../out/'):
    			os.mkdir('../out/')
		
		# iterate over all segmented words
    print('Segmented into %d words'%len(res1))
    for (j, w) in enumerate(res1):
        (wordBox, wordImg) = w
        (x, y, w, h) = wordBox
        cv2.imwrite('../out/out.png', wordImg) # save word
        cv2.rectangle(img,(x,y),(x+w,y+h),0,1) # draw bounding box in summary image
    
    # output summary image with bounding boxes around words
    cv2.imwrite('../out/summary.png', img)


    return sorted(res, key= lambda entry:entry[0][0])



def createKernel(kernelSize,sigma, theta):

    assert kernelSize%2

    halfsize = kernelSize//2
    kernel = np.zeros([kernelSize, kernelSize])
    sigmaX= sigma
    sigmaY= sigma *theta

    for i in range(kernelSize):
        for j in range(kernelSize):
            x = i- halfsize
            y = j- halfsize
            
            expTerm = np.exp(-x**2/ (2*sigmaX)  - y**2/(2*sigmaY))
            xTerm = (x**2 -sigmaX**2) /(2 * math.pi*sigmaX**5 * sigmaX)
            yTerm =  (y**2 - sigmaY**2) /(2 * math.pi*sigmaY**5 * sigmaX)
            kernel[i, j]= (xTerm + yTerm)* expTerm

    kernel = kernel / np.sum(kernel)
    return kernel