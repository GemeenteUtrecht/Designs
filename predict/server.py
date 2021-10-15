import fasttext
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
model = fasttext.load_model('model_klachtmelding.bin')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    input_text = str(request.data)
    prediction = model.predict(input_text)

    return jsonify({
        'label': prediction[0][0].replace('__label__', ''),
        'probability': prediction[1][0]
    })
