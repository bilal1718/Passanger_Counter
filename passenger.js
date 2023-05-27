 //Getting elements from the html

const counter=document.getElementById('num');
const countbtn=document.getElementById('mybtn');
const savebtn=document.getElementById('savebtn');
const preCount=document.getElementById('previous');
const blu = document.getElementById('countValue');

//initialize the value

let count=0;

//when the count button clicks ,the increment function runs

      countbtn.addEventListener('click',increment);
        function increment(){
           count= count + 1;
           counter.innerText=count;
        };

        //when the save button clicks ,it sae the values in previous record.

        savebtn.addEventListener('click',saveincrement);
        function saveincrement(){
            blu.innerText += count + "-";
            counter.innerText = 0;
            count = 0;
            blu.style.color = "#fff";
        };
        
        