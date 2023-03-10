const cont = document.querySelector('.bars_container');
const newArray = document.querySelector('#random_array')
const sort = document.querySelector('#sort')
const sizeSlider = document.getElementById('size_slider')
const speedSlider = document.getElementById('speed_slider')
const algo = document.getElementById('algo') 

let min = 1; 
let max = 20;
let array = [];
let numOfBars = parseInt(sizeSlider.value);
let delay = parseInt(speedSlider.value);
let algoUsed = "";

//creates new random array
newArray.addEventListener('click', function(){
    createArray();
    cont.textContent = ''
    bars(array)
})

//slider to change array size
sizeSlider.addEventListener("input", function () {
    numOfBars = sizeSlider.value;
    cont.innerHTML = "";
    createArray();
    bars(array);
  });

//slider to change speed 
speedSlider.addEventListener("input", function () {
   delay = 310 - parseInt(speedSlider.value);
  });

//choose the required algorithm
algo.addEventListener('change', () =>{
    algoUsed = algo.value;
})

function createArray()
{
    for(let i=0; i<numOfBars; i++)
    {
        //generate a random number and store it in the array
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array[i] = randomNum;
    }
}

//array is created and bars are rendered when dom is loaded
document.addEventListener("DOMContentLoaded", function() {
    createArray()
    bars(array)
})

//display bars based on array size
function bars(array){
    for(let i=0; i<numOfBars; i++)
    {
        const bar = document.createElement('div')
        bar.classList.add('bar');
        bar.style.height = array[i] * 15 + "px";
        cont.appendChild(bar);
    }
}

//function to set timeout
function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}

//implement bubblesort algo
async function bubbleSort(arr)
{
    const bars = document.getElementsByClassName('bar')
    for(let i = 0; i<numOfBars; i++)
    {
        for(let j = 0; j<numOfBars - i - 1; j++)
        { 
            if(arr[j] > arr[j+1])
            {
                let temp;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                bars[j].style.height = arr[j] * 15 + "px"
                bars[j].style.backgroundColor = "red"
                bars[j+1].style.height = arr[j+1] * 15 + "px"  
                bars[j+1].style.backgroundColor = "red"
                await sleep(delay)
            }
            bars[j].style.backgroundColor = "rgb(131, 237, 237)"
            bars[j+1].style.backgroundColor = "rgb(131, 237, 237)" 
            await sleep(delay)
        }
        bars[arr.length-i-1].style.backgroundColor = 'lightGreen'
        
    }
}

//implement insertion sort algo
async function insertionSort(arr)
{
    const bars = document.getElementsByClassName('bar')

    for(let i = 1; i<numOfBars; i++)
    {
        let temp = arr[i];
        let j = i - 1;
        for(; j>=0; j--)
        { 
            if(arr[j] > temp)
            {
                arr[j+1] = arr[j]
                bars[j+1].style.height = arr[j+1] * 15 + "px"  
                //yellow and red denote the positions where the shift is happening
                bars[j].style.backgroundColor = "yellow"
                bars[j+1].style.backgroundColor = "red"
                await sleep(delay)
            }
            else{
                break;
            }
            bars[j].style.backgroundColor = "rgb(131, 237, 237)"
            bars[j+1].style.backgroundColor = "rgb(131, 237, 237)" 
            await sleep(delay)
        }
        arr[j+1] = temp;
        bars[j+1].style.height = arr[j+1] * 15 + "px" 
        }
}

//implemented selection sort algo
async function selectionSort(arr)
{
    const bars = document.getElementsByClassName('bar')
    let i,j,min;
    for(i = 0; i<numOfBars; i++)
    {
        min = i; 
        for(j = i+1; j<numOfBars; j++)
        { 
            if(arr[j] < arr[min])
            {
                min = j;
            }
        }
        if(min!=i)
            {
                //swap (red colour denotes the position of swap)
                [arr[i],arr[min]] = [arr[min],arr[i]]
                bars[i].style.height = arr[i] * 15 + "px"  
                bars[i].style.backgroundColor = "red"
                bars[min].style.height = arr[min] * 15 + "px"  
                bars[min].style.backgroundColor = "red"
                await sleep(delay)
            }
            bars[i].style.backgroundColor = "rgb(131, 237, 237)"
            bars[min].style.backgroundColor = "rgb(131, 237, 237)" 
            await sleep(delay)    
            bars[i].style.backgroundColor = "lightGreen"
    }
    
}

sort.addEventListener('click' , function(){
    switch(algoUsed) {
        case("bubble") :
            bubbleSort(array);
            break;
        case("insertion"):
            insertionSort(array);
            break;
        case("selection"):
            selectionSort(array);
            break;
        case("merge"):
            mergeSort(array);
            break;
        case("quick"):
            quickSort(array);
           break;
        default:
            bubbleSort(array);
            break;
    
    
    
    }
})