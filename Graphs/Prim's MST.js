class MST {
    //var V = 5;

    //Initailize the number of vertex in the graph
    constructor() {
        this.V = 5;
    }

    //Function to find vertex with the min key value
    //Will get the min from the vertex not included in MST
    /*  @param 
        mstSet - array of vertices not included in the MST
    */    
    minKey(key, mstSet) {
        var min = Number.MAX_SAFE_INTEGER;
        var min_index = -1;

        for (var v = 0; v < this.V; v++) {
            if (mstSet[v] == false && (Number(key[v]) < Number(min))) {
                min = key[v];
                min_index = v;
            }
        }
        return min_index;
        
    }

    //Function to print the constructed MST stored in parent
    /*  @param 
        parent - array containing all the vertcies in the MST
    */  
    printMST(parent, n, graph) {
        console.log("Edge, Weight");

        for (var i = 1; i < this.V; i++)
            console.log(parent[i] + " - " + i + "    " +
                graph[i][parent[i]]);
    }

    primMST(graph) {

        //Array to store constructed MST
        var parent = [];
        //Key values to pick up minimum value
        var key = [];
        //Stores the edges which have not been included in the constructed MST
        var mstSet = [];

        //Initializing all the key values to infinity and 
        //values in mstSet as false, if the value is true that means the vertex has been included 
        //in the parent ie the resulting MST
        for (var i = 0; i < this.V; i++) {
            key[i] = 1 / 0;
            mstSet[i] = false;
        }

        //Start with the vertex and assign 0 to it in the key
        key[0] = 0;
        parent[0] = -1;

        //The below you have to repeat until all the vertices are processed
        for (var count = 0; count < this.V - 1; count++) {

            //Take the vertex with the minimum value in the key array
            var u = this.minKey(key, mstSet);
            //Mark the vertex as included in the mstSet
            //The edge won't be considered fo inclusion in MST since it is marked as true
            mstSet[u] = true;

            //Since this is an adjacet matrix representation we ave to see all the edges through loop
            for (var v = 0; v < this.V; v++) {
                
                //graph[u][v] != 0 --> If there is edge between those vertices
                //mstSet[v] == false --> If the edge is not already included in the MST
                /*
                    graph[u][v] < key[v] --> comapring edge weight with the key value
                                            If the key value is more then update key value with the edge value and parent
                */
                if (graph[u][v] != 0 &&
                    mstSet[v] == false &&
                    graph[u][v] < key[v]) {
                        parent[v] = u;
                        key[v] = graph[u][v];
                }
            }

        }

        this.printMST(parent, this.V, graph);
    }
}

/* Let us create the following graph
           2    3
        (0)--(1)--(2)
        |    / \   |
        6| 8/   \5 |7
        | /      \ |
        (3)-------(4)
             9          
*/
var t = new MST();

var graph = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0],
];

// Print the solution
t.primMST(graph);