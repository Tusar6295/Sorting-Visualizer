const cont = document.querySelector('.container');
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
        bar.style.height = array[i] * 10 + "px";
        cont.appendChild(bar);
    }
}

sort.addEventListener('click' , function(){
    console.log(bubbleSort(array));
})

function sleep(ms)
{
    return new Promise((r) => setTimeout(r,ms));
}
async function bubbleSort(arr)
{
    const bars = document.getElementsByClassName('bar')
    for(let i = 0; i<arr.length; i++)
    {
        for(let j = 0; j<arr.length - i; j++)
        {
            if(arr[j] > arr[j+1])
            {
                for(let k=0; k<bars.length; k++)
                {
                    if(k !==j && k !== j+1)
                    {
                        bars[k].style.backgroundColor = "aqua";
                    }
                }
                let temp;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                bars[j].style.height = arr[j] * 10 + "px"
                bars[j].style.backgroundColor = "green"
                bars[j+1].style.height = arr[j+1] * 10 + "px"  
                bars[j+1].style.backgroundColor = "green"
                await sleep(30)
            }
        }
        await sleep(30)
    }
    return array;
}