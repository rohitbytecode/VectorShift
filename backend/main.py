from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
    
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str
    type: str = None
    class Config:
        extra = "allow"

class Edge(BaseModel):
    source: str
    target: str
    class Config:
        extra = "allow"

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    is_dag = check_is_dag(pipeline.nodes, pipeline.edges)
    
    print("--- PARSE PIPELINE ---")
    print("Nodes:", [n.id for n in pipeline.nodes])
    print("Edges:", [(e.source, e.target) for e in pipeline.edges])
    print("Calculated is_dag:", is_dag)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }

def check_is_dag(nodes, edges):
    node_ids = {node.id for node in nodes}
    adjacency = {node_id: [] for node_id in node_ids}

    for edge in edges:
        if edge.source not in node_ids or edge.target not in node_ids:
            return False
        adjacency[edge.source].append(edge.target)

    visiting = set()
    visited = set()

    def dfs(node_id):
        if node_id in visiting:
            return False
        if node_id in visited:
            return True

        visiting.add(node_id)
        for neighbor in adjacency[node_id]:
            if not dfs(neighbor):
                return False
        visiting.remove(node_id)
        visited.add(node_id)
        return True

    return all(dfs(node_id) for node_id in node_ids)
