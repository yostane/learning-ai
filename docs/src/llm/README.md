# Online with Librechat
![librechat_interface](../assets/images/librechat_interface.png)

LibreChat is a free, open source AI chat platform. This Web UI offers vast customization, supporting numerous AI providers, services, and integrations. Serves all AI Conversations in one place with a familiar interface, innovative enhancements, for as many users as you need.

1. Prompts history
2. AI providers 
3. AI model version
4. Preformatted prompts 
5. RAG

## Favorites

The favorites feature in our app is a powerful tool that allows users to save and load favorite prompts for their conversations.

## Presets
The `presets` feature in our app is a powerful tool that allows users to save and load predefined settings for initialise a conversations. Users can import and export these presets as JSON files, set a default preset, and share them with others.

## Preformatted prompts 

The prompts feature in our app is a powerful tool that allows users to save and load predefined prompts for their conversations.
You can use a prompt with the /[`prompt command`]. A prompt can have parameters, which are replaced with values when the prompt is used.

Prompts  creation is available at the right sidebar. You can create a new prompt, edit an existing prompt, or delete a prompt.

**Exemple of preformatted prompts : Explain the following code snippet in Java, Kotlin or Javascript**

* Click on the `+` button to add a new prompt.
* name your prompt : `explain`
* on Text tab, you can write your prompt :
```
Explain the following {{language:Java|Kotlin|Javascript}} snippet of code: 
{{code}}
```
![preformatted_prompts_config](../assets/images/prompt.png)

* Now you can use the `/explain` command to get the explanation of the code snippet.

![preformatted_prompts_usage](../assets/images/demo_prompt.gif)


## AI providers 

### Azure OpenAI
Azure AI Search (formerly known as "Azure Cognitive Search") provides secure information retrieval at scale over user-owned content in traditional and generative AI search applications.

Information retrieval is foundational to any app that surfaces text and vectors. Common scenarios include catalog or document search, data exploration, and increasingly feeding query results to prompts based on your proprietary grounding data for conversational and copilot search. When you create a search service, you work with the following capabilities:

* A search engine for vector search and full text and hybrid search over a search index
* Rich indexing with integrated data chunking and vectorization (preview), lexical analysis for text, and optional applied AI for content extraction and transformation
* Rich query syntax for vector queries, text search, hybrid queries, fuzzy search, autocomplete, geo-search and others
* Azure scale, security, and reach
* Azure integration at the data layer, machine learning layer, Azure AI services and Azure OpenAI

### Google
Google Programmable Search Engine (formerly known as Google Custom Search and Google Co-op) is a platform provided by Google that allows web developers to feature specialized information in web searches, refine and categorize queries and create customized search engines, based on Google Search

### Anthropic
Claude is an Artificial Intelligence, trained by Anthropic. Claude can process large amounts of information, brainstorm ideas, generate text and code, help you understand subjects, coach you through difficult situations, help simplify your busywork so you can focus on what matters most, and so much more.

## Assistants 
The Assistants API enables the creation of AI assistants, offering functionalities like code interpreter, knowledge retrieval of files, and function execution. The Assistants API allows you to build AI assistants within your own applications. An Assistant has instructions and can leverage models, tools, and files to respond to user queries. The Assistants API currently supports three types of tools: Code Interpreter, File Search, and Function calling.

### Azure Assistant

## Plugins
The plugins endpoint opens the door to prompting LLMs in new ways other than traditional input/output prompting.

::: warning 
Every additional plugin selected will increase your token usage as there are detailed instructions the LLM needs for each one
For best use, be selective with plugins per message and narrow your requests as much as possible
:::

### DALL-E 3

Dall-e 3 is a librechat Plugin for generating images from text. You can use it to generate images from text, such as product descriptions, product images, or even documentation images to illustrate your technical documentation.

### Confluence
Ask confluence is a librechat Plugin for Confluence documents.

### IT support

Ask for IT support enable you to get support from the IT team and create WLSD tickets from your chats.

### WOLF

`Wolf` is a librechat Plugin for WL Managagement System documents. 
The sharepoint documention is available [here](https://worldline365.sharepoint.com/sites/AAC815)

Ask to WorldLine management system Friend everything you are looking for in the WMS content. 
AskWOLF plugin is meant to help you navigate through the multitude of information provided by the WMS (Applicable Policies, Processes & Procedures, Transversal & Operations SP pages links, …). This Worldline LibreChat plugin relies on ChatGPT technologies.

​​​​​​​Worldline Management System (WMS) is the Group reference for all information pertaining to our operating model such as applicable policies, processes and governance structures.
Key responsibilities are :
- consistently address its customers’ and markets’ requirements across all its geographies
- continuous improvement of customer satisfaction through effective application of WMS
- correct interpretation of applicable ISO standards requirements

Example of prompts:
- AskWOLF: What is the WMS?
- AskWOLF: What are the policies?
- AskWOLF: What are the processes?

### Browse plugins
Retrieve data from internet and use it to generate a response.

## Plugin mixing
You can mix plugins to create more complex prompts. For example, you can use the DALL-E 3 plugin to generate images from text and then use the IT support plugin to get support from the IT team.

```
Generate the favicon 16x16 pixels based on the content found in 
https://worldline.github.io/learning-ai/overview/ with Browser plugin 
and generate the favicon with DallE. I want no background and black and 
white style image
```
![prompt](../assets/images/multi_plugin.png)
![Favicon](../assets/images/result_prompt.png)

## RAG

RAG is possible with LIbrechat. You can use RAG to create a conversation with the AI.
To can add files to the conversation, you go to the file tab and select the file you want to add. Then the file will be added to the file manager and you can use it in the prompt.

The file can be an png, a video, a text file, or a PDF file.

## 🧪 Exercises

#### Try to make a request respecting Persona, Task and Context, and format structure

#### Prompt creation

Select one prompt engineering technique and make a prompt in librechat that can be called with the `/[prompt_name]` command.

#### Plugins mixing

Use the Browse and Dall-E plugins to create a prompt that generates a technical diagram based on the content of this learning-ai website


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