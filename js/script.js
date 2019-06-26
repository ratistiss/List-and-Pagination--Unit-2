/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

let studentList = document.querySelector('.student-list li');
let items = 10;


const showPage = (studentList, page) => {
   let startIndex = (page * items) - items;
   let endIndex = page * items;
   for (let x = 0; x < studentList.length; x += 1);
      if ((x >= startIndex) && (endIndex <= x)){
         studentList.style.display = "block";
      } else{
         studentList.style.display = "none";
      }
   }
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

let appendPageLinks = () => {
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   div.className = 'pagination';
   document.querySelector(".page").appendChild(div);
   div.appendChild(ul);
       let pages = Math.ceil(studentList.length / items);
         for (let x = 0; x < pages; x += 1){
            let li = document.createElement('li');
            let anchor = document.createElement('a');
           anchor.href = "#" ;
           anchor.textContent = x;
            li.appendChild(anchor);
            ul.appendChild(li);
     }
     
     anchor.addEventListener('click', (e) => {
      const a = document.querySelector('a');
       for (let i = 0; i < anchor.length; i += 1){
        a.className.remove = 'active'
      }
   event.target.className = 'active';
   showPage(studentList, anchor.textContent);
});
}

appendPageLinks(studentList);
showPage(studentList, appendPageLinks());
