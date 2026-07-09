# VectorShift Pipeline Builder

A drag-and-drop pipeline editor built with React, ReactFlow, and Zustand, paired with a FastAPI backend for pipeline validation.

## Overview

This project implements a visual node-based pipeline builder where users can drag nodes onto a canvas, connect them, and submit the resulting graph to a backend for analysis (node/edge count and DAG validation).

## Features

### Node Abstraction
All nodes are built on top of a shared `BaseNode` component (`src/nodes/baseNode.js`), which handles the outer container, title header, and Handle rendering. Each node type only needs to supply a title, a handle configuration, and its own field content — new node types can be added in a few lines without duplicating boilerplate.

**Available nodes:**
- Input, Output, LLM, Text (original four, refactored onto `BaseNode`)
- Math, Filter, API, Timer, Conditional (five new nodes demonstrating the abstraction)

### Styling
A unified dark theme is applied across the toolbar, canvas, and all nodes — consistent color palette, rounded cards with header/body separation, accent-colored connection handles, and hover states on draggable chips and the submit button.

### Text Node Logic
The Text node dynamically:
- Resizes its width/height based on the amount of text entered
- Detects `{{ variableName }}` patterns in the text and generates a corresponding input Handle on the left side for each unique variable found

### Backend Integration
Clicking Submit sends the current pipeline's nodes and edges as JSON to the FastAPI backend's `/pipelines/parse` endpoint. The backend computes the node count, edge count, and whether the graph is a valid DAG (via cycle detection), returning the result to the frontend, which displays it in an alert.

## Running the Project

### Frontend
```bash
cd frontend
npm i
npm start
```
Runs on [http://localhost:3000](http://localhost:3000).

### Backend
```bash
cd backend
pip install fastapi uvicorn pydantic
uvicorn main:app --reload
```
Runs on [http://localhost:8000](http://localhost:8000). Both servers must be running for the Submit button to work — CORS is enabled for `localhost:3000`.

## Tech Stack
- **Frontend:** React, ReactFlow, Zustand
- **Backend:** Python, FastAPI, Pydantic