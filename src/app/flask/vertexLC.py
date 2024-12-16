import logging
import time  # Import modul time untuk menghitung waktu respons
from flask import Flask, request, jsonify
from vertexai.language_models import ChatModel
import vertexai
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Logging untuk menangkap error dan mencetak informasi ke terminal
logging.basicConfig(level=logging.DEBUG)

# Inisialisasi Vertex AI
vertexai.init(
    project="loyal-optics-444709-d4",  # Ganti dengan project ID Anda
    location="us-central1"
)

chat_model = ChatModel.from_pretrained("chat-bison@private")

@app.route('/api/questions', methods=['POST'])
def generate_questions():
    start_time = time.time()  # Waktu mulai permintaan
    try:
        user_query = request.json.get("query")
        if not user_query:
            return jsonify({"error": "Query parameter is required"}), 400

        context = """Foto ijazah SMA Presiden Joko Widodo menjadi perbincangan hangat di media sosial. Sebab, tertera dua nama SMA di dalam stempel ijazah tersebut. Dua sekolah yang dimaksud para netizen adalah SMPP dan SMA VI. Tentu, informasi ini membingungkan. Apalagi, bila kita mencari informasi tentang Jokowi di mesin pencari internet, tempat ia mengenyam bangku SMA bukanlah dua sekolah tersebut, melainkan SMAN 6 Surakarta. Lantas, mengapa nama SMA-nya menjadi berbeda-beda? Mana SMA yang benar-benar pernah ditempati oleh Jokowi? Tim Kompas.com kemudian bertandang ke SMAN 6 Surakarta, Senin (17/10/2022), untuk mencari duduk persoalan kesimpangsiuran informasi ini.""" 
        
        prompt = f"Konteks:\n{context}\n\n{user_query}"

        # Mengirim permintaan ke LLM
        chat = chat_model.start_chat()
        parameters = {"candidate_count": 1, "max_output_tokens": 1024, "temperature": 0.2}
        response = chat.send_message(prompt, **parameters)

        # Parsing response
        try:
            llm_output = response.text
            parsed_output = json.loads(llm_output)  # Coba parse ke JSON jika model merespon string JSON
        except json.JSONDecodeError:
            parsed_output = [{"title": "No valid data", "description": "Invalid response from model", "explanation": llm_output}]

        # Waktu akhir respons
        end_time = time.time()
        time_taken = round(end_time - start_time, 2)  # Waktu total dalam detik

        # Log waktu respons ke terminal
        logging.info(f"Response time: {time_taken} seconds")

        # Return respons JSON
        return jsonify({"questions": parsed_output})

    except Exception as e:
        logging.exception("Error occurred while processing the request")  # Logging error
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
