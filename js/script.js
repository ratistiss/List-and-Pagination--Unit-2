/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

let studentList = document.querySelectorAll(".student-item");                          //Global variable for the list of students
let items = 10;                                                                        // Global variable for the 10 items per page


const showPage = (studentList, page) => {                                              // showPage function controls which students are shown
   let startIndex = (page * items) - items;                                            // startIndex is for which student appears at the top of the page
   let endIndex = (page * items);                                                      // endIndex is for which student appears at the bottom of the page 
   for (let x = 0; x < studentList.length; x += 1){
      if ((x >= startIndex) && (endIndex > x)){
         studentList[x].style.display = "block";                                       //displays which students are on the page
      } else {
         studentList[x].style.display = "none";                                        //Hides which students shouldnt be on the page
      }
   }
}


const div = document.createElement('div');
const ul = document.createElement('ul');
div.className = 'pagination';
document.querySelector(".page").appendChild(div);
div.appendChild(ul);

const appendPageLinks = () => {                                                        //Page Links Function
   const page = Math.ceil(studentList.length / items);                                 // equation to determine pages needed
   for (let x = 0; x < page; x += 1){                                                  //Loop to create elements needed for page
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = "#";
      anchor.textContent = x + 1;
      li.appendChild(anchor);
      ul.appendChild(li);
   }
   
   showPage(studentList, 1);                                                           //to display first page when html doc is loaded
  

   
   ul.addEventListener('click', (e) => {                                               //event listener for pagination links
      e.preventDefault();
      const anchor = document.querySelectorAll("a");                                   
       for (let i = 0; i < page; i += 1){
        anchor[i].classList.remove('active');                                          //removes class 'active' when somewhere else is clicked
      if (anchor[i].textContent === e.target.textContent) {                            // adds class 'active to new  link clicked
         e.target.className = "active";
         showPage(studentList, e.target.textContent);                                  //showPage function for when a link is clicked
     }}});

}
appendPageLinks(studentList);

