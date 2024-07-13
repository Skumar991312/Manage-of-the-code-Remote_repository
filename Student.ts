class Student{

StudentName:string;
StudentRank:number;
StudentMarks:number;

getStudentGrade() : string {

    if(this.StudentMarks >= 75){
        return "A";
    }else
    if(this.StudentMarks >= 65 && this.StudentMarks < 60){
        return "B";
    }
   else{
    return "C";
   }
}
}

   let s=new Student(); //object creation
   s.StudentName="sandeep";
   s.StudentMarks=50;
   s.StudentRank=3;
   console.log("Grade ::"+ s.getStudentGrade());


let s1 =new Student(); //object creation

s1.StudentName = "Ramu";
s1.StudentMarks = 90;
s1.StudentRank=2;    
console.log("Grade ::"+ s1.getStudentGrade());