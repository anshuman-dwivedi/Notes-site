console.log('Welcome to notes app');
// if user add a notes add it to local storage
let addBtn=document.getElementById('addbtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById("addtxt");
    let notes=localStorage.getItem("notes");
   if(notes == null){
        notesobj=[];
    }
    else{

        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    rendernotes(notesobj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value=" ";
    console.log(notesobj);
}
)
function rendernotes(notesobj){
    let container=document.getElementById("notes");
    let children="";
    for(let i=0;i<notesobj.length;i++)
{
     children+= `<div class=" noteCard my-2 mx-2 card" style ="width:18rem;">
     <div class="card-body">
          <h5 class="card-title">${notesobj[i]} </h5>
          <button id="${i} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
          
          </div>
        </div>`;
}
    container.innerHTML=children;
}
function deleteNote(index){
    console.log('I am deleting',index);
    let notes=localStorage.getItem("notes");
    if(notes == null){
         notesobj=[];
     }
     else{
 
         notesobj=JSON.parse(notes);
     }
     notesobj.splice(index,1);
     localStorage.setItem("notes",JSON.stringify(notesobj));
     rendernotes(notesobj);
}
/*let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inputval=search.value;
    console.log('Input event fired!',inputval);
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
let cardtxt=elementelement.getElementById
})

})*/