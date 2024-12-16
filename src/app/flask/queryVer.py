from google.cloud import aiplatform_v1beta1 as aiplatform
from vertexai.preview.language_models import TextEmbeddingModel


# Inisialisasi client Matching Engine
match_client = aiplatform.MatchServiceClient(client_options={
    "api_endpoint": "us-central1-aiplatform.googleapis.com"
})

# ID index endpoint Anda
index_endpoint = "projects/your-project-id/locations/us-central1/indexEndpoints/your-endpoint-id"

embedding_model = TextEmbeddingModel.from_pretrained("text-embedding-005")
query = "Ijazah Palsu Jokowi"

response_que = embedding_model.get_embeddings([query])

# Request pencarian
request = aiplatform.MatchServiceRequest(
    index_endpoint=index_endpoint,
    deployed_index_id="deployed-index-id",  # ID index yang dideploy
    queries=[
        {"query": response_que}
    ],
    num_neighbors=5  # Jumlah hasil tetangga terdekat
)

# Kirim request
response = match_client.match(request=request)

# Tampilkan hasil pencarian
for result in response.responses[0].matches:
    print(f"ID: {result.id}, Distance: {result.distance}")