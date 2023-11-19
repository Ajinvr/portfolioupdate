let loginvalue = document.querySelector("#usernamee");
let password = document.querySelector("#password")
password.value = "7H@ppyD@y"
let submit = document.querySelector("#login")
let usernameerror = document.querySelector("#usernameerror")
let passworderror = document.querySelector("#passworderror")
let emailid = document.querySelector("#emailid")
let emailerror = document.querySelector("#emailerror")
let emailvalidate =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let  passwordvalidate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

// submit event 
submit.addEventListener("click",function () {
    // user name
    if (loginvalue.value == " " || loginvalue.value == "") {
        usernameerror.innerHTML ="Username cannot be blank!"
        loginvalue.focus()  
    } else if(loginvalue.value === "admin") {
        usernameerror.innerHTML= "Username not available"
        loginvalue.focus()  
    }else if (loginvalue.value.length <4) {
        usernameerror.innerHTML= "Username too short"
        loginvalue.focus() 
    }else{
        usernameerror.innerHTML= ""
    }
   
    // email
    if (emailid.value == "" || emailid.value == " " ) {
        emailerror.innerHTML="Email id cannot be blank!"   
    } else if (emailvalidate.test(emailid.value) === false) {
        emailerror.innerHTML="Enter a valid email id"  
    } else {
        emailerror.innerHTML=""
    }

    // password
    if (password.value == "" || password.value == " " ) {
        passworderror.innerHTML="Password cannot be blank"
    } else if (passwordvalidate.test(password.value) === false) {
        passworderror.innerHTML="Password not strong"
    } else {
        passworderror.innerHTML="";
    }
        
    // redirect

    if (usernameerror.innerHTML ==="" && passworderror.innerHTML ===""&& emailerror.innerHTML ==="") {
        window.location.href= "portfolio.html"
    } else {
       console.log("failed to redirect");
    }
})

// ========
loginvalue.addEventListener("click",function() {
    usernameerror.innerHTML=""
});

password.addEventListener("click",function() {
  passworderror.innerHTML=""  
});

emailid.addEventListener("click",function() {
  emailerror.innerHTML=""  
});