console.log("student information website");
showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let AddStudentName=document.getElementById("AddStudentName");
    let StudentImg=document.getElementById("StudentImg");
    let ClassName=document.getElementById("ClassName");
    let RollNo=document.getElementById("RollNo");
   // console.log(AddStudentName);
   let StudentInFormation = localStorage.getItem("StudentInFormation");
   if (StudentInFormation == null) {
    StudentInFormationObj = [];
  } else {
    StudentInFormationObj = JSON.parse(StudentInFormation);
  }
  let myObj = {
    student: AddStudentName.value,
    image: StudentImg.value,
    class: ClassName.value,
    rollno:RollNo.value,
  };
  StudentInFormationObj.push(myObj);
  localStorage.setItem("StudentInFormation", JSON.stringify(StudentInFormationObj));
  AddStudentName.value = "";
  StudentImg.value = "";
  ClassName.value="";
  RollNo.value="";
  //console.log(StudentInFormationObj);
  showNotes();

})

function showNotes() {
    let StudentInFormation = localStorage.getItem("StudentInFormation");
    if (StudentInFormation == null) {
        StudentInFormationObj = [];
    } else {
        StudentInFormationObj = JSON.parse(StudentInFormation);
    }
    let html = "";
    StudentInFormationObj.forEach(function (element, index) {
      html += `
      <div class=" noteCard card" style="width: 18rem;">
           <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
               <h5 class="card-title">Name-${element.student}</h5>
                  <p class="card-text">Class-${element.class} </p>
                 <p class="card-rollNoi">Roll No-${element.rollno} </p>
                   <a href="#"  id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete</a>
              </div>
          </div>
          `;
    });
    let notesElm = document.getElementById("StudentInFormation");
    if (StudentInFormationObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show "Add a Student" section above to Student. `;
    }
  }

  //function to delete note
//function to delete note
function deleteNote(index) {
  
  let StudentInFormation = localStorage.getItem("StudentInFormation");
  //console.log(StudentInFormation);
  if (StudentInFormation == null) {
    StudentInFormationObj = [];
  } else {
    StudentInFormationObj = JSON.parse(StudentInFormation);
  }
  StudentInFormationObj.splice(index, 1);
  localStorage.setItem("StudentInFormation", JSON.stringify(StudentInFormationObj));
  showNotes();
}



let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
// console.log( inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("h5")[0].innerText;
    //console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      //  console.log(cardTxt);
      element.style.display = "block";
    } else {
       // console.log("uttam");
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});