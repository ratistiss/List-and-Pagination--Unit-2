/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

let studentList = document.querySelectorAll(".student-item");                          //Global variable for the list of students
let items = 10;                                                                        //Global variable for the 10 items per page


const showPage = (studentList, page) => {                                              //showPage function controls which students are shown
   let startIndex = (page * items) - items;                                            //startIndex is for which student appears at the top of the page
   let endIndex = (page * items);                                                      //endIndex is for which student appears at the bottom of the page 
   for (let x = 0; x < studentList.length; x += 1){
      if ((x >= startIndex) && (endIndex > x)){
         studentList[x].style.display = "block";                                       //displays which students are on the page
      } else {
         studentList[x].style.display = "none";                                        //Hides which students shouldnt be on the page
      }
   }
}


const div = document.createElement('div');                                             //div holding pagination links
const ul = document.createElement('ul');                                               //unordered list element
div.className = 'pagination';                                                          //added class name to div
document.querySelector(".page").appendChild(div);                                      //appended div to a parent div
div.appendChild(ul);                                                                   //appended ul to div

const appendPageLinks = () => {                                                        //Page Links Function
   const page = Math.ceil(studentList.length / items);                                 // equation to determine pages needed
   for (let x = 0; x < page; x += 1){                                                  //Loop to create elements needed for page
      const li = document.createElement('li');                                         //creates each <li> element needed
      const anchor = document.createElement('a');                                      //creates each <a> element needed
      anchor.href = "#";                                                               //adds an href to each <a>
      anchor.textContent = x + 1;                                                      //gives pagination links numbers(+1 so pagination links don't start at 0)
      li.appendChild(anchor);                                                          //appends <li> to <a>
      ul.appendChild(li);                                                              //appends <ul> to <li>
   }
   
   showPage(studentList, 1);                                                           //to display first page when html file is loaded
  

   
   ul.addEventListener('click', (e) => {                                               //event listener for pagination links
      e.preventDefault();
      const anchor = document.querySelectorAll("a");                                   //local variable to connect <a> to this function                                  
       for (let i = 0; i < page; i += 1){
        anchor[i].classList.remove('active');                                          //removes class 'active' when somewhere else is clicked
      if (anchor[i].textContent === e.target.textContent) {                            // adds class 'active to new  link clicked
         e.target.className = "active";
         showPage(studentList, e.target.textContent);                                  //showPage function for when a link is clicked
     }}});

}
appendPageLinks(studentList);                                                          //calls function to html file

const div2 = document.createElement('div');
document.querySelector('.page-header').appendChild(div2);
const input = document.createElement('input');
input.placeholder = "Search for Students";
const button = document.createElement('button');
button.textContent = 'Search';
div2.appendChild(input);
div2.appendChild(button);
const students = document.querySelectorAll('h3');

button.addEventListener('click', (e) =>{
   for(let x = 0; x < students.length; x += 1 )
if (input.value === students[x].textContent){
   studentList[x].style.display = "block";
} else {
   studentList[x].style.display = "none"; 
      } 
   // window.alert("That User does not Exist,Please check your spelling to make sure you typed correctly!");
   // input.value = '';
   // return;

})

// input.addEventListener('onkeyup', (e) => {
//    for (let x = 0; x < students.length; x += 1)
//       if (event.target.value == students[x].textContent) {
//          studentList[x].style.display = "block";
//       } else {
//          studentList[x].style.display = "none";
         
//       }
   
// }) 