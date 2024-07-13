function wish(msg:string, name?:string) :string{

    return name + msg;
}
console.log(wish("Good morning sandeep","Good Bay"));

console.log(wish("Good morning sandeep"));

function jay(name:string, msg:string="Hii") :string{

    return name + msg;
}
console.log(jay("Sandeep","Good"));
console.log(jay("Sandeep"));


function baby(msg:string, ...names:string[]){

    console.log(msg + "--"+names.join(","));
}
baby("Hello","sandeep","kumar");
 baby("kanak","mohan","treeshka","komal","kanhiya");

