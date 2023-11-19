let loginvalue = document.querySelector("#usernamee");
let password = document.querySelector("#password");
let submit = document.querySelector("#login");
let usernameerror = document.querySelector("#usernameerror");
let  passworderror = document.querySelector("#passworderror");


// submit event
submit.addEventListener("click",function () {

 // username
if (loginvalue.value == "" || loginvalue.value == " ") {
    usernameerror.innerHTML ="username cannot be blank!"
    loginvalue.focus()
} else if (loginvalue.value != "admin"){
    usernameerror.innerHTML ="username dosen't match"
    loginvalue.focus()
}else{
    usernameerror.innerHTML ="" ;
    password.focus()
}

// password validation
if (password.value == "" || password.value == " ") {
    passworderror.innerHTML ="password cannot be blank!"
    password.focus()
} else if (password.value != "admin"){
    passworderror.innerHTML ="password dosen't match"
    password.focus()
}else{
    passworderror.innerHTML ="" ;
}
})
// ==end==

// ====
loginvalue.addEventListener("click",function() {
usernameerror.innerHTML =""    
})

password.addEventListener("click",function() {
passworderror.innerHTML =""  
})

if (loginvalue.value != "") {
    password.focus()
    
}
// ====

// redirect
submit.addEventListener("click",function (){
if (loginvalue.value =="admin" && password.value =="admin") {
    window.location.href="portfolio.html"
}
    
})

