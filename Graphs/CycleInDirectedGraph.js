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

    hasCycle(vert) {
        var whiteSet = new Set();
        var graySet = new Set();
        var blackSet = new Set();

        for (var i = 0; i < vert.length; i++) {
            whiteSet.add(vert[i]);
        }
        var temp = this;
        var res;
        while (whiteSet.size > 0) {
            whiteSet.forEach(function (val) {
                if (temp.dfs(val, whiteSet, graySet, blackSet)) {
                    res = true;
                }
            })
        }
        if(res == true){
            return true;
        }else{
            return false;
        }
        
    }

    dfs(current, whiteSet, graySet, blackSet) {
        this.moveVertex(current, whiteSet, graySet);

        var get_neighbours = this.AdjList.get(current);
        var temp = this;

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (blackSet.has(get_elem)) {
                continue;
            }
            if (graySet.has(get_elem)) {
                return true;
            }

            if (temp.dfs(get_elem, whiteSet, graySet, blackSet)) {
                return true;
            }
        }

        this.moveVertex(current, graySet, blackSet);
        return false;
    }

    moveVertex(ver, sourceSet, destSet) {
        sourceSet.delete(ver);
        destSet.add(ver);
    }

}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = [1, 2, 3, 4, 5, 6];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.addEdge(4, 1);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(6, 4);

if (g.hasCycle(vertices)) {
    console.log("has cycle");
} else {
    console.log("doesn't have cycle");
}


