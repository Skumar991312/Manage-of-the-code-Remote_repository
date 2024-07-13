var index=0;

for(let index=0; index<=5; index++){
    console.log("index of value inside:"+index);
}
console.log("index of value outside:" + index);

console.log("=====================================");

  function display(){

    let msg:string="Welcome to Home";
    {
        let msg:string="Thankyou for you watching !!";

        console.log("inside of the value:"+ msg);
    }
console.log("outside of the value:"+ msg);
  }

  display();