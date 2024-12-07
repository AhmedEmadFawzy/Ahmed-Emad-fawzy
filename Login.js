
// هندسه انا لما بعمل login  الاسم بيظهر عادي هو ممكن بيعلق اول مره بس انما بعد كدا بيشتغل عادي


let loginName = document.getElementById("loginName")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginEmailIn = document.getElementById("loginEmailIn")
let  loginPasswordIn = document.getElementById("loginPasswordIn")
let btnUp = document.getElementById("SignUp") 
let signIn = document.getElementById("btnSignIn")
let Login = document.getElementById("Login")
let btnSignup = document.getElementById("btnSignup")
let logOut = document.getElementById("logOut")

// ------------------------------------------------------------------------------------

// local storage

let inputs = [];
if (localStorage.getItem("inputs") !== null) {
    inputs = JSON.parse(localStorage.getItem("inputs"));
    display()
}


// switch between buttons

signIn.addEventListener("click" , function() {
document.getElementById("hambozooooo").classList.remove("d-none") 
document.getElementById("hamada").classList.add("d-none")
validationName()    
validationEmail()
})

btnSignup.addEventListener("click" , function() {
document.getElementById("hambozooooo").classList.add("d-none")
document.getElementById("hamada").classList.remove("d-none")
passwordValidation()
validationEmail()
})


// dispaly 


function display(){
    var nameUser = "";
    for (var i = 0 ; i<inputs.length ;i++ ){
        nameUser +=`
  <div class="card2  ">
    <div class="row">
      <div class=" part1 col-6  ">
       <h1 class="text-black" id="GoodMorning" >Good Morning Mr ,  ${inputs[i].name} </h1>
       <div class="mt-5" >
       </div>
        <img src="undraw_balloons_re_8ymj.svg" class=" img-one w-50" alt="">
</div>
<div class="partt2 col-6 ">
  <h1 class="text-white mt-5 " >Welcome </h1>
<img src="undraw_waiting__for_you_ldha.svg"   alt="">
</div>
</div>
  </div>

        
       
`    }
document.getElementById("successLogin").innerHTML= nameUser
}


// check email = email or no


btnUp.addEventListener("click", function(){
 if(validationEmail() && validationName() && passwordValidation() ){
    var info = {
        name : loginName.value , 
        email : loginEmail.value , 
        password : loginPassword.value  
     }
         document.querySelector("p").classList.remove("d-none")
                    if(info){
                    inputs.push(info)
                    localStorage.setItem("inputs", JSON.stringify(inputs))
                    console.log(inputs)
                    }else{
                        document.querySelector("small").classList.remove("d-none")
                        document.querySelector("p").classList.add("d-none")
                    }
                    } })


// ---------------------------------------------------------------------------------------------------------


Login.addEventListener("click", function(){
    var infoLogin = {
        emailLogin : loginEmailIn.value , 
        passwordLogin : loginPasswordIn.value  
     }
    let founded = false
   for  (  let i = 0 ; i<inputs.length ; i++ ){
    if(inputs[i].email ==  infoLogin.emailLogin  && inputs[i].password == infoLogin.passwordLogin   ){
            founded = true ; 
        
  }  }
            if (founded) {
                document.getElementById("successLogin").classList.remove("d-none")
                document.getElementById("card").classList.add("d-none")
                document.getElementById("navbar").classList.remove("d-none")
                } 
                 else{   
                    document.getElementById("false").classList.remove("d-none")


                }
    })



// ---------------------------------------------------------------------------------



logOut.addEventListener("click" , function(){
    document.getElementById("successLogin").classList.add("d-none")
    document.getElementById("navbar").classList.add("d-none")
    document.getElementById("card").classList.remove("d-none")

    
} )


// -----------------------------------------------------------------

btnUp.addEventListener("click", function () {
    var info = {
        name: loginName.value,
        email: loginEmail.value,
        password: loginPassword.value
    };

    if (validationEmail(info.email) && passwordValidation(info.password)) {
        let inputs = JSON.parse(localStorage.getItem("info")) || [];
             
        let emailFounded = false;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].email === info.email) {
                emailFounded = true;
            }
        }

        if (emailFounded) {
            document.getElementById("emailSigned").classList.remove("d-none");
            document.querySelector("small").classList.add("d-none");
            document.querySelector("p").classList.add("d-none");
        } else {
            inputs.push(info);
            localStorage.setItem("info", JSON.stringify(inputs));

            document.getElementById("emailSigned").classList.add("d-none");
            document.querySelector("small").classList.add("d-none");
            document.querySelector("p").classList.remove("d-none");
        }
    }
});

// validation


function validationName (){
    var regex = /^[a-z\sA-z]{4,15}$/gm;
    var Text = loginName.value;
    if (regex.test(Text)) {
        document.querySelector("small").classList.add("d-none")
        document.querySelector("p").classList.remove("d-none")
        return true

}else {
    document.querySelector("small").classList.remove("d-none")
    document.querySelector("p").classList.add("d-none")   
    return false
}
}


// ----------------------------------------------------------------------------------------


function validationEmail (){
    var term = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ; 
    var termText = loginEmail.value ; 
    if (term.test(termText)){
        document.querySelector("small").classList.add("d-none")
        document.querySelector("p").classList.remove("d-none")
        return true
        }else {
        document.querySelector("small").classList.remove("d-none")
        document.querySelector("p").classList.add("d-none") 
        return false  
        }  
}


// -----------------------------------------------------------------------------------------------------


function passwordValidation(){
    var pass = /^(?=.*[a-zA-Z])(?=.*d)(?=.*[^ws]).{8,16}$/; 
    var passText = loginPassword.value ; 
    if (pass.test(passText)){
        document.querySelector("small").classList.add("d-none")
        document.querySelector("p").classList.remove("d-none")
        return true
    }else { 
        document.querySelector("small").classList.remove("d-none")
        document.querySelector("p").classList.add("d-none")   
        return false
    }
}

