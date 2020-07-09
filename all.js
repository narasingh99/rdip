
  function func1(val) 
     {  
            document.getElementById("t1").value+=val
            return val;

        } 

        function equal_function()
            {
            let x = document.getElementById("t1").value
            if(x.includes('+'))
            {
                add();
            }
            if(x.includes('-'))
            {
                minus();
            }
             if(x.includes('/'))
            {
                div();
            }
            if(x.includes('*'))
            {
                mul();
            }

            if(x.includes('%'))
            {

                per();
            }

            }

        function add()
        {
          let x = document.getElementById("t1").value

          let arr= x.split('+')
          let y=Number(arr[0])+Number(arr[1]);  
          document.getElementById("t1").value = y
          return y;

        }
        function minus()
        {
          let x = document.getElementById("t1").value

          let arr= x.split('-')
          let y=Number(arr[0])-Number(arr[1]);  
          document.getElementById("t1").value = y
          return y;

        }
        function div()
        {
          let x = document.getElementById("t1").value

          let arr= x.split('/')
          let y=Number(arr[0])/Number(arr[1]);  
          document.getElementById("t1").value = y
          return y;

        }
        function mul()
        {
          let x = document.getElementById("t1").value

          let arr= x.split('*')
          let y=Number(arr[0])*Number(arr[1]);  
          document.getElementById("t1").value = y
           return y;

        }
      function per()
      {
        let x = document.getElementById("t1").value
          let arr= x.split('%')
          let y=(Number(arr[0])*Number(arr[1]))/100;

          document.getElementById("t1").value = y
                return y;
      }

function sqroot()

{
    var result=Math.sqrt(Number(document.getElementById("t1").value));
    if(result%1==0)
{
    document.getElementById("t1").value=result;
    return result;
}
else
{
    document.getElementById("t1").value=result.toFixed(3);
    return result.toFixed(3);


}
}
function abs()
{
   var x=Number( document.getElementById("t1").value);
   if(x<0)
   {
    document.getElementById("t1").value = document.getElementById("t1").value*(-1);
     return document.getElementById("txt").value*(-1);
   } 
   else
   {
     document.getElementById("t1").value= document.getElementById("t1").value;
     return document.getElementById("t1").value;
   }
}
function cleartxt()
{
     document.getElementById("t1").value= " "
     return true;
}

//Validation

function formValidation()
{
var uname = document.registration.username;
var num = document.registration.number;
var uemail = document.registration.email;
if(allLetters(uname))
{
if(allnumbers(num))
{
if (validateEmail(uemail))
{
}
}
}
return false;
}
function allLetters(uname)
{

var letters = /^[a-z A-Z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username should have first character as alphabet');
uname.focus();
return false;
}
}
function allnumbers(num)
{

var numbers =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(num.value.match(numbers))
{
return true;
}
else
{
alert('Must have numbers only with 10 digits');
num.focus();
return false;
}
}

function validateEmail(uemail)
{

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
alert('Form Successfully Submitted');
window.location.reload();
return "Form Successfully Submitted";
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return "Form is not Submitted";
}
}
 



 //palindrome

 function check_Palindrome(){
 var str_entry =document.getElementById('str').value
   var l_str = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
    if(l_str==="") {
        document.getElementById("demo1").innerHTML="Nothing found!";
        return "Nothing found!";
    }
    if ((l_str.length) % 2 === 0) {
        count = (l_str.length) / 2;
    } else {
        if (l_str.length === 1) {
            document.getElementById("demo1").innerHTML="Entry is a palindrome.";
            return "Entry is a palindrome.";
        } else {
            count = (l_str.length - 1) / 2;
        }
    }
    for (var x = 0; x < count; x++) {
        if (l_str[x] != l_str.slice(-1-x)[0]) {
           document.getElementById("demo1").innerHTML="Entry is not a palindrome.";
            return "Entry is not a palindrome.";
        }
    }
     document.getElementById("demo1").innerHTML="The entry is a palindrome.";
    return "The entry is a palindrome.";
}
 function check_Anagram() 
 {
        var stringA=document.getElementById("str1").value;
        var stringB=document.getElementById("str2").value;
        stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
        stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

        if( sortString(stringA) === sortString(stringB))
          {

            document.getElementById("demo2").innerHTML="It is an Anagram";
          return "It is an Anagram";
         }
        else
        {
            document.getElementById("demo2").innerHTML="It is not an Anagram";
            return "It is not an Anagram";
        }


    function sortString(string) 
    {
        return string.split('').sort().join('');
    }
}