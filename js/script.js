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

let studentList = document.querySelectorAll(".student-item");
let items = 10;


const showPage = (studentList, page) => {
   let startIndex = (page * items) - items;
   let endIndex = (page * items);
   for (let x = 0; x < studentList.length; x += 1){
      if ((x >= startIndex) && (endIndex > x)){
         studentList[x].style.display = "block";
      } else {
         studentList[x].style.display = "none";
      }
   }
}
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const div = document.createElement('div');
const ul = document.createElement('ul');
div.className = 'pagination';
document.querySelector(".page").appendChild(div);
div.appendChild(ul);

const appendPageLinks = () => {
   //
   const page = Math.ceil(studentList.length / items);
   //console.log(pages);
   for (let x = 0; x < page; x += 1){
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = "#";
      anchor.textContent = x + 1;
      li.appendChild(anchor);
      ul.appendChild(li);
   }
   
   showPage(studentList, 1);
  

   
   ul.addEventListener('click', (e) => {
      e.preventDefault();
      const anchor = document.querySelectorAll("a");
       for (let i = 0; i < page; i += 1){
        anchor[i].classList.remove('active');
      if (anchor[i].textContent === e.target.textContent) {
         e.target.className = "active";
         showPage(studentList, e.target.textContent);
     }}});

}
appendPageLinks(studentList);

