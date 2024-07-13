var petName = "dog";
function setPetName() {
    var petName = "cat";
    console.log("Inseide the print:" + petName);
}
setPetName();
console.log("Outside the name::" + petName);
var index = 0;
for (var index = 0; index <= 5; index++) {
    console.log("Inside the for loop::" + index);
}
console.log("Outside The for Loop::" + index);
