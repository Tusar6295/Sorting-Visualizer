const cont = document.querySelector('.bars_container');
const newArray = document.querySelector('#random_array')
const sort = document.querySelector('#sort')


newArray.addEventListener('click', function(){
    createArray();
    cont.textContent = ''
    bars(array)
})

let min = 1; 
let max = 20;
let array = [];

function createArray()
{
    for(let i=0; i<50; i++)
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
    for(let i=0; i<array.length; i++)
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
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = 0; j<arr.length - i - 1; j++)
        {
            bars[j].style.backgroundColor = "green"
            bars[j+1].style.backgroundColor = "green"  
            await sleep(1) 
            if(arr[j] > arr[j+1])
            {
                for(let k=0; k<bars.length; k++)
                {
                    if(k !==j && k !== j+1)
                    {
                        bars[k].style.backgroundColor = "white";
                    }
                }
                let temp;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                bars[j].style.height = arr[j] * 15 + "px"
                bars[j].style.backgroundColor = "red"
                bars[j+1].style.height = arr[j+1] * 15 + "px"  
                bars[j+1].style.backgroundColor = "red"
                await sleep(1)
            }
            bars[j].style.backgroundColor = "white"
            bars[j+1].style.backgroundColor = "white" 
            await sleep(1)
        }
       
    }
    return array;
}