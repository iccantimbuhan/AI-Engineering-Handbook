# Lesson 02 – What is a Large Language Model (LLM)?

**Module:** AI Fundamentals

**Status:** Completed

**Estimated Study Time:** 30–45 minutes

---

# Learning Objectives

After completing this lesson, I should be able to:

- Explain what a Large Language Model (LLM) is.
- Explain why it is called "Large."
- Explain how an LLM learns.
- Explain the difference between an LLM and a chatbot.
- Explain why an LLM predicts language instead of memorizing answers.

---

# Connection to Previous Lesson

In Lesson 01, I learned that Ollama is responsible for running AI models on my computer.

However, I still did not know what an AI model actually was.

This lesson explains what a Large Language Model (LLM) is and why it is considered the "brain" behind applications such as ChatGPT, Claude, Gemini, and Ollama.

---

# Why Are We Learning This?

Before building AI applications, I need to understand what is actually generating the responses.

Many developers know how to install Ollama or call an API but cannot explain what an LLM actually is.

Understanding LLMs is the foundation of AI Engineering.

Everything that follows—tokens, parameters, embeddings, RAG, vector databases, and prompt engineering—depends on understanding this lesson.

---

# Definition

A Large Language Model (LLM) is an Artificial Intelligence model trained on massive amounts of text so it can understand and generate human language.

Unlike traditional software, an LLM is not programmed with fixed answers.

Instead, it learns patterns, relationships, and structures from training data.

Because of this, it can generate completely new responses instead of simply retrieving stored answers.

---

# Why is it called a "Large" Language Model?

There are three reasons.

## 1. Large Training Data

The model learns from enormous collections of books, websites, documentation, code, and many other text sources.

---

## 2. Large Number of Parameters

Modern LLMs contain billions of parameters.

These parameters store what the model has learned during training.

Examples:

- Llama 3.2 (3B)
- Qwen 3
- DeepSeek
- GPT
- Claude

---

## 3. Large Computing Power

Training an LLM requires enormous computing resources.

Companies often use thousands of GPUs running continuously for weeks or months.

---

# Mental Model

Think of a newborn baby.

A baby is born knowing nothing.

Over time, the baby learns by listening, reading, observing, and practicing.

Eventually, the child can communicate naturally.

An LLM works similarly.

Instead of learning from life experiences, it learns from enormous collections of text.

It gradually recognizes patterns in language.

---

# Architecture Diagram

```text
                 Human

             Experience

                  │

                  ▼

              Learning

                  │

                  ▼

             Knowledge



                  LLM

            Training Data

                  │

                  ▼

              Learning

                  │

                  ▼

                Model
```

---

# Deep Explanation

Imagine reading every public book, article, programming tutorial, and documentation you could find.

Eventually, you would begin noticing patterns.

You would understand grammar.

You would recognize common programming techniques.

You would learn how people answer questions.

An LLM does something similar.

During training, it processes enormous amounts of text.

Instead of memorizing every sentence, it learns statistical relationships between words.

For example:

The sky is blue.

The grass is green.

The sun is hot.

After seeing millions of similar examples, the model begins recognizing patterns.

Later, when asked a question, it uses those learned patterns to generate an answer.

This is why an LLM can answer questions it has never seen before.

---

# Traditional Software vs LLM

Traditional Software

Input

↓

Program Rules

↓

Output

The programmer writes every rule.

---

Large Language Model

Training Data

↓

Learning

↓

Model

↓

Prediction

The model learns patterns instead of fixed rules.

---

# Real World Example

Suppose a company wants employees to ask questions about internal documents.

Instead of sending confidential documents to a cloud provider:

Employee

↓

Company Portal

↓

Ollama

↓

Qwen

↓

Answer

Everything remains inside the company's own infrastructure.

This improves privacy and security.

---

# Engineer's Note

Do not think of an LLM as a giant database of answers.

Instead, think of it as a system that has learned relationships between words and ideas.

This mindset makes every future AI topic much easier to understand.

---

# Common Mistakes

❌ Thinking the model memorizes every answer.

Reality:

The model predicts responses using learned patterns.

---

❌ Thinking Ollama is the AI.

Reality:

Ollama runs the AI.

The AI is the language model.

---

❌ Thinking ChatGPT is the model.

Reality:

ChatGPT is the application.

GPT is the language model.

---

# Best Practices

- Understand concepts before writing code.
- Learn the difference between the runtime and the model.
- Build a strong mental model before studying advanced topics.
- Focus on understanding rather than memorizing definitions.

---

# Interview Questions

## What is an LLM?

An LLM is an Artificial Intelligence model trained on enormous amounts of text to understand and generate human language.

---

## Why is it called "Large"?

Because it is trained using massive datasets, contains billions of parameters, and requires significant computing resources.

---

## Is an LLM the same as a chatbot?

No.

The chatbot is the application.

The LLM is the AI brain.

---

## Does an LLM memorize every answer?

No.

It learns patterns and predicts responses.

---

## Can an LLM think like a human?

No.

It has no consciousness or emotions.

It predicts the next most likely token based on what it learned during training.

---

# Knowledge Check

Without looking above, answer these questions.

1. What is an LLM?

2. Why is it called "Large"?

3. What is the difference between Ollama and Llama?

4. Why doesn't AI memorize answers?

5. What is the difference between an LLM and a chatbot?

---

# Lab

## Objective

Understand what an LLM is before building applications with it.

## Activity

Explain to another person:

- What an LLM is.
- Why Ollama is not the AI.
- Why an LLM learns patterns instead of memorizing answers.

If you can explain these concepts simply, you understand this lesson.

---

# Portfolio Connection

Understanding LLMs allows me to choose the right model for future projects.

Throughout this bootcamp I will use Llama, Qwen, and DeepSeek to build AI-powered applications.

---

# Key Takeaways

- An LLM is the AI brain.
- Ollama runs the AI model.
- AI learns patterns instead of storing answers.
- Training is different from using the model.
- Understanding LLMs is the foundation of AI Engineering.

---

# Reflection

## What was the biggest thing I learned today?

(Write your answer.)

---

## What still confuses me?

(Write your answer.)

---

## Git Commit

```bash
git add .
git commit -m "Lesson 02 - Understanding Large Language Models"
```