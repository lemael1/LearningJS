let firstname="Hao";
let age=21;
let student=true;
console.log("Hello", firstname);
console.log("You are", age,"years old");
console.log("Enrolled:", student);


document.getElementById("p1").innerHTML= "Hello "+ firstname;
document.getElementById("p2").innerHTML= "You are "+ age +"years old";
document.getElementById("p3").innerHTML="Enrolled: "+ student;
