
const AddTwoNumbers = (a,b) => {
    return a+b;
};



const Is_Valid = (a,b) => {
    return a<10 && a>b;
  };



  const Check = (A, B) => 
{
   if(A%10===0 && B%10===0){
     return "true";
   } 
   else if(A%10===0 || B%10===0){
     return "true";
   }
   else{
     return "false";
   } 
};




const First_Digit = (n) => {
    var a=n/1000;
    var b=parseInt(a);
    return b;
 };




 const Last_Digit = (n) => {
    var a=n%10;
    return a;
    };




 const Find_the_remainder = (a,b) => {
        var c=b%a;
        return c;
    };




    const Multiply_two_number = (a,b) => {
        return a*b;
    };




    const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
 return (A+B+C)/3;
};
