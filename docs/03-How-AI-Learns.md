# Lesson 03 – How AI Actually Learns

**Module:** AI Fundamentals

**Status:** Completed

**Estimated Study Time:** 45–60 minutes

---

# Learning Objectives

After completing this lesson, I should be able to:

- Explain what AI training is.
- Explain the difference between training and inference.
- Explain what a dataset is.
- Explain why GPUs are needed.
- Explain why training takes weeks or months.
- Explain why I do not train a model every time I use Ollama.

---

# Connection to Previous Lesson

In Lesson 02, I learned that a Large Language Model (LLM) is an AI model trained on massive amounts of text.

This lesson explains **how that training actually happens**.

Understanding AI training helps me understand why models like Llama, Qwen, DeepSeek, and GPT become intelligent.

---

# Why Are We Learning This?

Many people think AI is manually programmed with millions of rules.

It is not.

Instead, AI learns from examples.

Understanding the learning process is one of the biggest differences between an AI user and an AI engineer.

---

# Definition

AI training is the process of teaching a model by exposing it to enormous amounts of data.

During training, the model gradually discovers patterns, relationships, grammar, reasoning strategies, and programming concepts.

The result of training is a model that can generate responses to questions it has never seen before.

---

# The Two Phases of AI

Every LLM has two completely different phases.

## Phase 1 – Training

The model is learning.

Examples:

- Reading books
- Reading code
- Reading documentation
- Reading articles

The model is NOT answering users.

It is only learning.

---

## Phase 2 – Inference

Training is finished.

Now the model answers users.

Examples:

- ChatGPT
- Claude
- Ollama
- Open WebUI

This is called inference.

---

# Mental Model

Imagine a student studying for an exam.

Months before the exam:

Student

↓

Reads books

↓

Practices

↓

Learns

This is training.

Now imagine exam day.

Teacher asks a question.

↓

Student answers.

This is inference.

The student is no longer learning.

The student is using what was learned.

AI works in exactly the same way.

---

# Architecture Diagram

```text
                    Books

                    Code

                  Websites

                 Documentation

                      │

                      ▼

                Training Dataset

                      │

                      ▼

                AI Training Process

                      │

         Thousands of GPUs Working

                      │

                      ▼

                Trained AI Model

                      │

                 Saved as GGUF

                      │

                      ▼

                    Ollama

                      │

                      ▼

                User Questions

                      │

                      ▼

                  AI Response
```

---

# What is a Dataset?

A dataset is the collection of information used to teach an AI model.

Examples include:

- Books
- Wikipedia
- Programming code
- Scientific papers
- Documentation
- Public websites

The larger and higher quality the dataset, the better the model can learn.

---

# Why Does Training Take So Long?

Imagine reading every programming book ever written.

Now imagine memorizing the patterns from all of them.

That would take years.

AI does something similar.

Modern language models process trillions of words.

Training often requires:

- Thousands of GPUs
- Weeks or months of computation
- Massive amounts of electricity

---

# Why Are GPUs Used?

Training AI involves billions of mathematical calculations every second.

GPUs are designed to perform many calculations at the same time.

This makes them much faster than normal CPUs for AI workloads.

---

# Training vs Using AI

Training

↓

Model learns

↓

Weeks or months

↓

Very expensive

---

Inference

↓

Model answers questions

↓

Milliseconds or seconds

↓

Much cheaper

When I use Ollama on my Mac, I am performing inference.

I am NOT training Llama.

---

# Real-World Example

Meta trains Llama once.

The finished model is released.

Developers around the world download it.

Instead of training it again, they simply run the model using software such as Ollama.

This saves enormous amounts of time and money.

---

# Engineer's Note

One of the biggest beginner misunderstandings is thinking that ChatGPT or Ollama is "learning from every conversation."

That is generally not how inference works.

When I ask Ollama a question, it answers using the knowledge it learned during training.

It is not retraining itself every time I chat with it.

---

# Common Mistakes

❌ Thinking Ollama trains the model.

Reality:

Ollama only runs the trained model.

---

❌ Thinking chatting improves the model.

Reality:

Inference and training are separate processes.

---

❌ Thinking every AI company trains its own models.

Reality:

Many companies use existing open-source models like Llama, Qwen, or DeepSeek.

---

# Best Practices

- Understand the difference between training and inference.
- Choose an existing model unless you truly need to train your own.
- Learn how models are trained before learning how to fine-tune them.

---

# Vocabulary

## Training

Teaching an AI model using large datasets.

---

## Inference

Using a trained model to generate responses.

---

## Dataset

The collection of information used during training.

---

## GPU

A processor optimized for massive parallel computations.

---

## Model

The final AI produced after training.

---

# Interview Questions

## What is AI training?

AI training is the process of teaching a model using massive datasets so it can learn patterns and relationships.

---

## What is inference?

Inference is the process of using a trained model to answer questions or generate responses.

---

## Why don't we train Llama ourselves?

Training requires enormous computing resources, time, and money.

Instead, we use an already-trained model.

---

## Does Ollama train AI?

No.

Ollama runs trained AI models.

---

## Why are GPUs important?

Because AI training involves billions of mathematical calculations that GPUs can perform much faster than CPUs.

---

# Knowledge Check

Without looking above, answer these questions.

1. What is AI training?
2. What is inference?
3. Why doesn't Ollama train models?
4. Why do AI companies need GPUs?
5. What is a dataset?

---

# Lab

## Objective

Understand the difference between training and inference.

## Activity

Open Ollama.

Run:

```bash
ollama run llama3.2
```

Ask:

"Who trained you?"

Observe that the model explains it was trained before you started chatting.

Now ask:

"Are you learning from this conversation?"

Compare the answer with this lesson.

---

# Portfolio Connection

My AI Platform will never train models.

Instead, it will use pre-trained models running through Ollama.

This allows me to build powerful AI applications without needing millions of dollars worth of hardware.

---

# Key Takeaways

- Training and inference are different.
- Ollama performs inference.
- Models are trained only once before being distributed.
- GPUs make AI training possible.
- Most developers use pre-trained models instead of training their own.

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
git commit -m "Lesson 03 - How AI Actually Learns"
```