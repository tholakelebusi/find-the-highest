// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let students=[{studentName:"Tholakele",studentSurname:"Cossa",studentAge:24,studentGrade:"11"},{studentName:"Lifa",studentSurname:"khosa",studentAge:20,studentGrade:"12"},{studentName:"Artimiza",studentSurname:"cossa",studentAge:11,studentGrade:"5"}];
 

 function studentHighestAge()
 {
    let highest;
   let max=students[0].studentAge;
   for(let i=0;i<=students[i].studentAge;i++)
   {
     if(max<students[i].studentAge)
     {
      
       max=students[i].studentAge;
      
     }
   }
 return max;
 }


 console.log(studentHighestAge());