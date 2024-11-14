#  General assistants

## Prompt engineering
Prompt engineering involves the design and creation of prompts that are used to elicit specific responses or actions from AI models or interactive systems. These prompts are carefully crafted to guide the behavior or generate particular outputs from the AI, such as generating natural language responses, providing recommendations, or completing specific tasks.

### Definition

In the context of AI language models, prompt engineering is especially important for shaping the model's behavior and output. By designing prompts effectively, engineers can influence the model's responses and ensure that it generates coherent, relevant, and accurate content.

There are four main areas to consider when writing an effective prompt. You don’t need to use all four, but using a few will help!

Persona: Who is the user you're writing for? What are their skills and knowledge?
Task: What specific action do you want the user to perform?
Context: What information does the user need to know to complete the task?
Format: What is the desired output of the task?

```
Example Prompt:
You are a Google Cloud program manager. Draft an executive summary email to [persona] based on [details about relevant program docs]. Limit to bullet points.
```

### Advice & feedback
By using "act as," you are establishing a specific context for the language model and guiding it to understand the type of task or request you are making. This helps to set the right expectations and provides the language model with the necessary context to generate a response tailored to the defined role.

```
"Act as a creative writing assistant and generate a short story based on a prompt about a futuristic world where robots have become sentient."
```

### Summarize
```
Help me write an article of this document [Insert or copy paste document text]
Generate 5 titles out of the following topic….
Generate a subtitle to catch readers’ attention on the following topic [describe the topic]
```

### Fix 
```
Help me find mistakes in my code [insert your code]
Explain what this snippet of code does [insert code snippet]
What it the correct syntax for a [statement or function] in [programming language]
How do I fix the following programming language code [program language] code which explain the functioning [Insert code snippet]
```

### Write
```
Create a template of an email response to customer inquiring about ….
Create a guide that explains how to use ….
Write step by step instructions
```

## LibreChat quickstart
![librechat_interface](../assets/images/librechat_interface.png)

LibreChat is a free, open source AI chat platform. This Web UI offers vast customization, supporting numerous AI providers, services, and integrations. Serves all AI Conversations in one place with a familiar interface, innovative enhancements, for as many users as you need.

1. Prompts history
2. AI providers 
3. AI model version
4. Prompts preformatted
5. RAG

### Presets
The “presets” feature in our app is a powerful tool that allows users to save and load predefined settings for their conversations. Users can import and export these presets as JSON files, set a default preset, and share them with others on Discord.

### AI providers 

#### Azure OpenAI
Azure AI Search (formerly known as "Azure Cognitive Search") provides secure information retrieval at scale over user-owned content in traditional and generative AI search applications.

Information retrieval is foundational to any app that surfaces text and vectors. Common scenarios include catalog or document search, data exploration, and increasingly feeding query results to prompts based on your proprietary grounding data for conversational and copilot search. When you create a search service, you work with the following capabilities:

* A search engine for vector search and full text and hybrid search over a search index
* Rich indexing with integrated data chunking and vectorization (preview), lexical analysis for text, and optional applied AI for content extraction and transformation
* Rich query syntax for vector queries, text search, hybrid queries, fuzzy search, autocomplete, geo-search and others
* Azure scale, security, and reach
* Azure integration at the data layer, machine learning layer, Azure AI services and Azure OpenAI

#### Google
Google Programmable Search Engine (formerly known as Google Custom Search and Google Co-op) is a platform provided by Google that allows web developers to feature specialized information in web searches, refine and categorize queries and create customized search engines, based on Google Search

#### Anthropic
Claude is an Artificial Intelligence, trained by Anthropic. Claude can process large amounts of information, brainstorm ideas, generate text and code, help you understand subjects, coach you through difficult situations, help simplify your busywork so you can focus on what matters most, and so much more.

### Assistants 
The Assistants API enables the creation of AI assistants, offering functionalities like code interpreter, knowledge retrieval of files, and function execution. The Assistants API allows you to build AI assistants within your own applications. An Assistant has instructions and can leverage models, tools, and files to respond to user queries. The Assistants API currently supports three types of tools: Code Interpreter, File Search, and Function calling.

#### Azure Assistant

### Plugins
The plugins endpoint opens the door to prompting LLMs in new ways other than traditional input/output prompting.

::: warning 
Every additional plugin selected will increase your token usage as there are detailed instructions the LLM needs for each one
For best use, be selective with plugins per message and narrow your requests as much as possible
:::

#### Ask Wolf
#### Ask Confluence
#### DALL-E 3
#### MyWLContentQA


### Code generation
```
Act as a code generator. Generate a Python function that takes a list of numbers as input and returns the sum of all the numbers.
```

### Code completion


###  Code conversion


### Code review


### Scoped code refactor

### Bug detection and fixing

### Mock data generation

### Testing

### System design and architecture

### Documentation generation


### Shell commands

### Regular expression


## RAG basics

## Offline prompting 

### Definition
### LM Studio

## 🧪 Exercises

## 📖 Further readings
* [LibreChat Worldline guides](https://worldline365.sharepoint.com/:u:/r/sites/GenerativeAIQA/SitePages/LibreChat-guides.aspx?csf=1&web=1&e=evKJpU)
* [LibreChat worldline instance](https://librechat.as8677.net/login)
* [LibreChat official website](https://www.librechat.ai/)
* [LibreChat Github repository](https://github.com/danny-avila/LibreChat)
* [Gemini Prompting guide]()
* [Azure search](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search)
* [Google programmable search engine](https://programmablesearchengine.google.com/about/)
* [Claude AI](https://www.anthropic.com/)
* [OpenAI Assistant feature](https://platform.openai.com/docs/assistants/overview)


