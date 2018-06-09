class ShortestPath{
    
    //constructor
    constructor(){
        this.V = 9;
    }

    //Function to find vertex with min distance from all the 
    //vertices that have not been included in the MST
    minDistance(dist, sptSet){
        var min = Number.MAX_SAFE_INTEGER;
        var min_index = -1;

        for(var i=0; i< this.V; i++){
            if(sptSet[i] == false && dist[i]< min){
                min = dist[i];
                min_index = i;
            }
        }

        return min_index;
    }

    //Function to print the constructed array
    printSolution(dist, n){
        console.log("Vertex from source");
        for(var i=0; i< this.V; i++){
            console.log(i+ "    "+dist[i]);
        }
    }

    //Function to implement Dijsktra algorithm for a graph represented 
    //using adjacency matrix
    dijsktra(graph, src){
        
        //Array to hold the shortest distance from the src
        //dist[i] will hold the shortest distance from source to i
        var dist = [];

        //Array to hold the vertices included
        //sptSet[i] will be true if the vertex has been included in shortest path tree
        //and distance from src to i finalizd
        var sptSet = [];

        for(var i=0; i<this.V; i++){
            dist[i] = 1/0;
            sptSet[i] = false;
        }

        dist[src] = 0;

        for(var count=0 ; count<this.V - 1; count++){

            var u = this.minDistance(dist, sptSet);

            sptSet[u] = true;

            for(var v=0; v<this.V; v++){
                if(graph[u][v] != 0 &&
                    !sptSet[v] &&
                        (dist[u] + graph[u][v] < dist[v])){
                            dist[v] = dist[u] + graph[u][v];
                        }
            }
        }

        this.printSolution(dist, this.V);
    }
}

var graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 11, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

var t = new ShortestPath();

t.dijsktra(graph, 0);