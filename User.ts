class User{
 userId : number;
 userName : string;
 
   constructor(userId:number, username:string,) {

           this.userId=userId;
           this.userName=username;
           
       }
    }
    let use=new User(10,"Ram");
      console.log("userId:"+use.userId);
      console.log("userName:"+use.userName);



    