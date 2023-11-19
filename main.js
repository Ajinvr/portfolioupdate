// <== pass word filed show and hide toggle ==>
let itag =document.querySelector("#passsh")
let passwordfield = document.querySelector(".inputfieldp")

itag.addEventListener("click",function() {
if (passwordfield.type === "text") {
  passwordfield.type = "password"
} 
else{
    passwordfield.type = "text"
} 
changeicon()  
})

function changeicon() { 
if (passwordfield.type =="text") {
    itag.className ="fa-regular fa-eye"
}else{
    itag.className="fa-regular fa-eye-slash"
}
}
changeicon()  
//   <== end ==>


