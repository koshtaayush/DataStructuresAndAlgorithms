// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.



function printArr(arr){
    var str = "";
    for(var i=0; i<arr.length; i++){
        str = str+ " " +arr[i];
    }
    console.log(str);
}

function selectionSort(){
    var arr = [64,25,12, 22, 11];
    for(var i=0; i<arr.length-1; i++){
        var minIndex = i;
        for(var j=i+1; j<arr.length; j++){
            if(arr[j]< arr[minIndex]){
                minIndex = j;
            }
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i]= temp;
    }
    console.log("sorted array");
    printArr(arr);
}

selectionSort();
