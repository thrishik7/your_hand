from flask import Flask, request, redirect, send_from_directory
from flask_cors import CORS
import os
from Model import DecoderType
from Model import Model
from main import infer 
from flask import jsonify, json, make_response


app = Flask(__name__, static_folder='frontend/build/')

CORS(app, resources={r"*":{"origins":"http://localhost:5000"}})

app.config["IMAGE_UPLOADS"]='../data'

@app.route("/upload-image", methods=["POST"])
def upload_image():
    if request.method =="POST":
       if request.files:
           image= request.files["image"]
           image.save(os.path.join(app.config["IMAGE_UPLOADS"], 'test.png'))
           decoderType= DecoderType.BeamSearch
           model = Model(open('../data/charList.txt').read(), decoderType, mustRestore=True)
           text=infer(model,'../data/test.png')
           return make_response(jsonify(text), 200)

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)