class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertices(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.vertices.length; i++) {
      str += this.vertices[i] + " -> ";
      let neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        str += neighbors[j] + " ";
      }
      str += "\n";
    }
    return str;
  }
}

class Dictionary {
  constructor() {
    this.items = {};
  }

  has(key) {
    return key in this.items;
  }

  set(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }
}

const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertices(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());
