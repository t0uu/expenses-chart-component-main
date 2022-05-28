import './style.css'


const containerChart = document.getElementById('containerChart') as HTMLElement
const getData = async() =>  {
        const response = await fetch('/data.json');
        const data:[] = await response.json();
        
        
         data.forEach(element => {
         const {day,amount} = element
             
         containerChart.innerHTML += `
         <div class="containerBars">
         <div class="numbers" id="amount">$${amount}</div>
         <div class="barChart"  style="height:${amount * 3.1}px"></div>
         <div><small class="textDay">${day}</small></div>
         </div>
         `
         });  
    }



getData()
