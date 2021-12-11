var day = parseInt(prompt("Key in your day of birth"));
alert(day);
var month = parseInt(prompt("Which month were you born?"));
alert(month);
var year = parseInt(prompt("Which year was it?"));
alert(year);
var YY = year % 100;
var CC = (year-YY)/100;
var MM = month;
var DD = day;
var d = ((~~(CC/4)-(2*CC)-1)+~~((5*YY)/4)+~~((26*(MM+1))/10)+DD)% 7;
if (d === 0) {
  alert("You were born on a Sunday");
} else if (d === 1) {
 alert("You were born on a Monday");
}  else if (d === 2) {
 alert("You were born on a Tuesday");
} else if (d === 3) {
 alert("You were born on a Wednesday");
} else if (d === 4) {
 alert("You were born on a Thursday");
} else if (d === 5) {
 alert("You were born on a Friday");
} else if (d === 6) {
 alert("You were born on a Saturday");
}

var gender = prompt("What is your gender? Male or female?")
if (d === 0 && gender === "male") {
  alert("Your akan name is Kwasi");
} else if (d === 1 && gender === "male") {
 alert("Your akan name is Kwadwo");
}  else if (d === 2 && gender === "male") {
 alert("Your akan name is Kwabena");
}else if (d === 3 && gender === "male") {
 alert("Your akan name is Kwaku");
}else if (d === 4 && gender === "male") {
 alert("Your akan name is Yaw");
}else if (d === 5 && gender === "male") {
 alert("Your akan name is Kofi");
}else if (d === 6 && gender === "male") {
 alert("Your akan name is Kwame");
}
else if (d === 0 && gender === "female") {
  alert("Your akan name is Akosua");
} else if (d === 1 && gender === "female") {
 alert("Your akan name is Adwoa");
}  else if (d === 2 && gender === "female") {
 alert("Your akan name is Abena");
}else if (d === 3 && gender === "female") {
 alert("Your akan name is Akua");
}else if (d === 4 && gender === "female") {
 alert("Your akan name is Yaa");
}else if (d === 5 && gender === "female") {
 alert("Your akan name is Afua");
}else if (d === 6 && gender === "female") {
 alert("Your akan name is Ama");
}
