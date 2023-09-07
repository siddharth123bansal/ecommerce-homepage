var cred = [];
if (localStorage.getItem("cred") != null) {
  cred = JSON.parse(localStorage.getItem("cred"));
} else {
  cred = [
    { username: "sid", email: "sid@gmail.com", password: "test1" },
    { username: "sid1", email: "sid@gmail.com", password: "test12" },
    { username: "sid2", email: "sid@gmail.com", password: "test123" },
  ];
}

console.log(JSON.parse(localStorage.getItem("cred")));
console.log(localStorage.getItem("username"));
function addUser(){
  var name = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        cred.push({"username":name,"email":email,"password":password})
        localStorage.setItem("cred",JSON.stringify(cred));
        localStorage.setItem("username",name);
        username='';
        email='';
        password='';
}

if(localStorage.getItem("username")!=null)
{
    document.getElementById('logindata').textContent=localStorage.getItem("username");
}   

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("loginForm");
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      var flag=false
      console.log("login");
      var name = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            cred.forEach(element => {
              if(element.username==name && element.password==password){
                localStorage.setItem("username",name);
                window.location.href = "eshop.html";
                flag=true;
                console.log("Login Successfull");
                return;
              }
            });
            if(flag==false){
              alert("Invalid Credentials")
            }
  });
});













function login(){
  var flag=false
  console.log("login");
  var name = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        cred.forEach(element => {
          if(element.username==name && element.password==password){
            localStorage.setItem("username",name);
            window.location.href = "eshop.html";
            flag=true;
            console.log("Login Successfull");
            return;
          }
        });
        if(flag==false){
          alert("Invalid Credentials")
        }
}