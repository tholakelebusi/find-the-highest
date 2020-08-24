// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const students=[{studentName:"Tholakele",studentSurname:"Cossa",studentAge:6,studentGrade:"R"},
{studentName:"Lifa",studentSurname:"khosa",studentAge:14,studentGrade:"7"},
{studentName:"Artimiza",studentSurname:"Ncobo",studentAge:9,studentGrade:"3"},
{studentName:"Sphelele",studentSurname:"Mthhembu",studentAge:17,studentGrade:"11"},{studentName:"Tholakele",studentSurname:"Mhlanga",studentAge:8,studentGrade:"2"},
{studentName:"Rose",studentSurname:"Dube",studentAge:1,studentGrade:"11"},,{studentName:"Tholakele",studentSurname:"Chauke",studentAge:20,studentGrade:"11"},
{studentName:"Maria",studentSurname:"Ndlovu",studentAge:13,studentGrade:"6"},
{studentName:"Precious",studentSurname:"Sbiya",studentAge:18,studentGrade:"12"},
{studentName:"Smangele",studentSurname:"Zwane",studentAge:10,studentGrade:"1"},];
 

function highestAge()
{
   let age;
   age=students.reduce((prev,current)=>(+prev.studentAge>+current.studentAge? prev:current))
   return age;
}

 console.log(highestAge());


 
function total()
{
  const count=students.reduce((total,{studentAge})=>studentAge<=9? total+1 :total,0)
 
   return count;
}
console.log(total());
  
 

