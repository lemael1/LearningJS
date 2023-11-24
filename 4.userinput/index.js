// let user= window.prompt("Nhap ten cua ban");
// console.log(user);
//Differcult way with HTML

document.getElementById("myButton").onclick=function(){
   let username=document.getElementById("myText").value;
   console.log(username);
   document.getElementById("myLabel").innerHTML = "Hello " + username;
}