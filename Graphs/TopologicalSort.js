class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // add vertex to the graph
    addVertex(v) {
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge betweeen v and w
        this.AdjList.get(v).push(w);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // Main toplogical sort method
    topoSort(){

        var stack = [];

        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++){
            visited[i] = false;
        }
        
        var temp = this;

        for(var i =0 ; i<visited.length; i++){
            if(!visited[i]){
                temp.topoSortUtil(i, visited, stack);
            }
        }

        var stackSeq = "";        

        for(var j=stack.length-1; j>=0;j--){
            stackSeq = stackSeq+ " " + stack[j];
        }

        console.log(stackSeq);

    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    topoSortUtil(vert, visited, stack) {
        visited[vert] = true;

        var get_neighbours = this.AdjList.get(vert);

        var temp = this;

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem]) {
                temp.topoSortUtil(get_elem, visited, stack);
            }
        }

        stack.push(vert);
        //console.log(stack);
    }

}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = [0, 1, 2, 3, 4, 5];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

//5 4 2 0 1 3
g.topoSort();
