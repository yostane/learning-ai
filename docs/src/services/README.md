#  AI for services 

## APIs with LibreChat

For basic APIs exchange with LibreChat, you can use simple HTTP requests. You can use the `/api/v1/chat/completions` endpoint to send a request to the API and receive a response.

### Usage 

### Structured Outputs (Json Mode) 
Json mode is a feature that allows you to send structured data to the model. It is useful for working with structured data, such as JSON objects, and for interacting with models that require structured input.

To use Json mode, you need to specify the input format as JSON in the prompt. You can do this by adding the following line to the beginning of your prompt:

### Function calling (langchain4j)
Function calling is a feature that allows you to call functions from other services. It is useful for working with functions, such as APIs, and for interacting with models that require function calls.

To use function calling, you need to specify the function name and arguments in the prompt. 

### 🧪 Exercises

#### Exercice 1 : Request an LLM with Json mode by using the Langchain4j or JS lanchchain  library

#### Exercice 2 : Request an LLM with function calling by using the Langchain4j or JS lanchchain  library


## CloudAI with GCP
GCP is a suite of cloud computing services provided by Google. It includes a wide range of tools and services for building and consuming LLMs, such as Vertex AI, Google Colab, and ML Flow.

###  Large Consumer-Facing
These products are directly available to consumers, often integrating AI capabilities into everyday applications:

- **Google Colaboratory (Colab):** A free Jupyter Notebook environment hosted by Google. Excellent for learning, experimentation, and sharing machine learning code. While not a "production" platform like Vertex AI, it's extremely popular for its ease of use and free access to compute resources (though with limitations).
- **Gemini:** Google's large language model (LLM), positioned as a competitor to OpenAI's GPT models. Gemini's capabilities are integrated into various Google products and services, and are also accessible through APIs. Different versions of Gemini (e.g., Gemini Pro, Gemini Ultra) offer varying levels of capability and access. It powers several consumer-facing features across Google's ecosystem.
- **AI Studio** Cloud-based machine learning platform offered by several companies, most notably Google with its Google AI Studio (now largely integrated into Vertex AI) and Amazon with Amazon SageMaker Studio. While both share the general goal of providing a user-friendly environment for building, training, and deploying machine learning models, their specific features and offerings differ. https://aistudio.google.com/

### Vertex AI 
This is the central hub for most Google Cloud's AI/ML services. It integrates and supersedes many previous offerings.

- **Vertex AI Training:** Training machine learning models using various algorithms and frameworks (TensorFlow, PyTorch, scikit-learn, XGBoost, etc.). Provides access to managed compute instances (including TPUs).
- **Vertex AI Prediction:** Deploying trained models for inference (making predictions). Offers different deployment options based on scale and latency requirements.
- **Vertex AI Pipelines:** Creating and managing machine learning workflows, including data preprocessing, model training, evaluation, and deployment, as a series of connected steps.
- **Vertex AI Model Monitoring:** Monitoring deployed models for performance degradation and potential issues (drift).
- **Vertex AI Feature Store:** Centralized repository for storing, managing, and versioning features used in machine learning models, improving collaboration and reuse.
- **Vertex AI Matching Engine:** A service for performing similarity searches (for example, recommendation systems).

### Google Cloud APIs

Pre-trained Models and APIs: Google offers numerous pre-trained models and APIs for various tasks, making it easier to integrate AI into applications without building models from scratch. Examples include:

- **Google Cloud Natural Language API:** Processing and understanding text (sentiment analysis, entity recognition, etc.).
Google Cloud Vision API: Analyzing images (object detection, image classification, optical character recognition, etc.).
- **Google Cloud Speech-to-Text API:** Converting audio to text.
- **Google Cloud Text-to-Speech API:** Converting text to audio.
- **Google Cloud Translation API:** Translating text between languages.
- **Other APIs**: Many more APIs exist for various tasks like video intelligence, dialogflow (conversational AI), and more.

### Specialized AI Products
Beyond the core platform and APIs, Google offers several specialized AI products:

- **TensorFlow:** A popular open-source machine learning framework developed by Google. While not strictly a "Google Cloud" product, it's deeply integrated with their services.
- **TensorFlow Extended (TFX):** A platform for deploying TensorFlow models at scale, often used in conjunction with Vertex AI.
- **JAX:** A high-performance machine learning library, often used for research and advanced applications.
- **Google AI Platform Notebooks (integrated into Vertex AI):** Jupyter Notebook environments hosted on Google Cloud. (Previously a separate offering, often confused with Google Colab.)
- **Dialogflow CX:** A conversational AI platform for building complex conversational experiences.


### 🧪 Exercises

#### Exercice 1 : Use Vertex AI to fork and deploy a model
#### Exercice 2 : Use AI Studio to train a simple model
#### Exercice 3 : Use you instance to create a simple chatbot application


## Advanced RAG  (llama-index)
RAG with Ollama CLI with Langchain4j and llama-index

### 🧪 Exercises

#### Exercice 1 : Use llama-index with Ollama CLI to make a simple RAG request


## Collaborative (Hugging Face)
The platform where the machine learning community collaborates on models, datasets, and applications.

Hugging Face is a platform for researchers and developers to share, explore, and build AI models. It provides a centralized repository for models, datasets, and applications, making it easy to find, use, and contribute to the growing ecosystem of AI technologies. 

- Creating/deploy/customize a model
- Pre-trained model, use behind the APIs, also a ML part, training model generation for use

### 🧪 Exercises

#### Exercice 1 : Use Hugging Face to use a pre-trained model of worldline fraud detection model



##  Manage models (ML Flow)
MLflow provides tools for managing experiments, tracking model versions, deploying models to various environments, and managing models in a central registry. It's designed to be platform-agnostic, meaning it can work with many different cloud providers and even on-premises infrastructure.

## 🧪 Exercises

#### Exercice 1 : Use MLFlow to create a model registry in GCP instance

1. Create a model registry in GCP instance
2. Create a model in the registry
3. Deploy the model to GCP instance

## 📖 Further readings
