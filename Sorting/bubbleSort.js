// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

function printArr(arr){
    var str = "";
    for(var i=0; i<arr.length; i++){
        str = str+ " " +arr[i];
    }
    console.log(str);
}

function bubbleSort(){
    var arr = [64, 34, 25, 12, 22, 11, 90]; 

    for(var i=0; i<arr.length-1; i++){
        var swapped = false;
        for(var j=0; j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }

        if(swapped == false){
            break;
        }
    }

    printArr(arr);
}

bubbleSort();
