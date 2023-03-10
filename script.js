const cont = document.querySelector('.bars_container');
const newArray = document.querySelector('#random_array')
const sort = document.querySelector('#sort')
const sizeSlider = document.getElementById('size_slider')
const speedSlider = document.getElementById('speed_slider')
const algo = document.getElementById('#algo') 

let min = 1; 
let max = 20;
let array = [];
let numOfBars = parseInt(sizeSlider.value);
let delay = parseInt(speedSlider.value);

newArray.addEventListener('click', function(){
    createArray();
    cont.textContent = ''
    bars(array)
})

sizeSlider.addEventListener("input", function () {
    numOfBars = sizeSlider.value;
    cont.innerHTML = "";
    createArray();
    bars(array);
  });

  speedSlider.addEventListener("input", function () {
   delay = 310 - parseInt(speedSlider.value);
  });

function createArray()
{
    for(let i=0; i<numOfBars; i++)
    {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array[i] = randomNum;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createArray()
    bars(array)
})

function bars(array){
    for(let i=0; i<numOfBars; i++)
    {
        const bar = document.createElement('div')
        bar.classList.add('bar');
        bar.style.height = array[i] * 15 + "px";
        cont.appendChild(bar);
    }
}

sort.addEventListener('click' , function(){
    console.log(bubbleSort(array));
})

function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function bubbleSort(arr)
{
    const bars = document.getElementsByClassName('bar')
    for(let i = 0; i<numOfBars; i++)
    {
        for(let j = 0; j<numOfBars - i - 1; j++)
        { 
            if(arr[j] > arr[j+1])
            {
                // for(let k=0; k<bars.length; k++)
                // {
                //     if(k !==j && k !== j+1)
                //     {
                //         bars[k].style.backgroundColor = "#55bdca";
                //     }
                // }
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
    return array;
}