#  Prompt with AI

The full documentation is available [here](https://www.librechat.ai/docs)

## Prompt engineering
Prompt engineering involves the design and creation of prompts that are used to elicit specific responses or actions from AI models or interactive systems. These prompts are carefully crafted to guide the behavior or generate particular outputs from the AI, such as generating natural language responses, providing recommendations, or completing specific tasks.

### Definition

In the context of AI language models, prompt engineering is especially important for shaping the model's behavior and output. By designing prompts effectively, engineers can influence the model's responses and ensure that it generates coherent, relevant, and accurate content.

There are four main areas to consider when writing an effective prompt. You don’t need to use all four, but using a few will help!

- `Persona`: Who is the user you're writing for? What are their skills and knowledge?
- `Task`: What specific action do you want the user to perform?
- `Context`: What information does the user need to know to complete the task?
- `Format`: What is the desired output of the task?

**Example Prompt:**
* [`Persona`] You are a Google Cloud program manager. 
* [`Task`] Draft an executive summary email
* [`Context`] to [person description] based on [details about relevant program docs]. 
* [`Format`] Limit to bullet points.

### General usage
By using "act as," you are establishing a specific context for the language model and guiding it to understand the type of task or request you are making. This helps to set the right expectations and provides the language model with the necessary context to generate a response tailored to the defined role.

```
"Act as a creative writing assistant and generate a short story based 
on a prompt about a futuristic world where robots have become sentient."
```

#### Summarize
```
Help me write an article of this document [Insert or copy paste document text]
Generate 5 titles out of the following topic….
Generate a subtitle to catch readers’ attention on the following topic [describe the topic]
```

#### Fix 
```
Help me find mistakes in my code [insert your code]
Explain what this snippet of code does [insert code snippet]
What it the correct syntax for a [statement or function] in [programming language]
How do I fix the following programming language code [program language] code which explain the functioning [Insert code snippet]
```

#### Write
```
Create a template of an email response to customer inquiring about ….
Create a guide that explains how to use ….
Write step by step instructions
```

##  Developers prompts

### Code explanation
Code explanation is a prompt engineering technique that involves providing a detailed explanation of a code snippet or function. This technique is useful for developers who want to understand the inner workings of a codebase or for those who want to document their code.

cf. Preformatted prompts for an example of code explanation

### Generation
```
Act as a code generator. Generate a Python function that takes a list of numbers as input and returns the sum of all the numbers.
```

### Completion

Code completion is a prompt engineering technique that involves providing a list of possible completions for a given code snippet or function. This technique is useful for developers who want to suggest possible code changes or improvements based on their existing code.

###  Conversion

Code conversion is a prompt engineering technique that involves providing a conversion of a code snippet or function from one programming language to another. This technique is useful for developers who want to migrate their code from one language to another or for those who want to use a different programming language for their projects.


### Review

Code review is a prompt engineering technique that involves providing a code review of a given code snippet or function. This technique is useful for developers who want to review their code for potential issues,bugs, or for those who want to provide feedback on their code.

### Fixing

Code fixing is a prompt engineering technique that involves providing a code fix for a given code snippet or function. This technique is useful for developers who want to fix bugs or issues in their code or for those who want to improve the quality of their code.

### Refactoring

Code refactor is a prompt engineering technique that involves providing a code refactoring of a given code snippet or function within a specific scope. This technique is useful for developers who want to refactor their code within a specific context or for those who want to improve the readability and maintainability of their code.

### Data mocking  

Mock data generation is a prompt engineering technique that involves providing a mock data set for a given code snippet or function. This technique is useful for developers who want to test their code with mock data or for those who want to generate test data for their projects. It avoid creating manually fake data for testing.


## Other prompts

### Testing

Testing is a prompt engineering technique that involves providing a test case for a given code snippet or function. This technique is useful for developers who want to test their code or for those who want to ensure the correctness of their code.

### System design and architecture

System design and architecture is a prompt engineering technique that involves providing a system design or architecture for a given code snippet or function. This technique is useful for developers who want to design their code or for those who want to understand the overall architecture of their projects.

### Documentation generation

Documentation generation is a prompt engineering technique that involves providing a documentation for a given code snippet or function. This technique is useful for developers who want to document their code or for those who want to provide documentation for their projects. It can be used to generate documentation in various formats such as Markdown, HTML, or PDF.

### Shell/CLI commands manual

As a developer, you’re not limited to only writing code. LLMs can assist with CLI such as shell commands and version control using Git.

### Regular expression explanation

You can understand complex regular expressions and generate ones that match specific patterns in text. This technique is useful for developers who want to write complex regular expressions or for those who want to understand the syntax of regular expressions.

```
Explain this regular expression in JavaScript: const regex = 
/^[A-Za-z0–9._%+-]+@[A-Za-z0–9.-]+\\.[A-Za-z]{2,}$/;
```




