//let string = "dharhd"
function palindrome(string)
{
let array = string.split("")
console.log(array);

let isPalindrome = true

let l = array.length //5
for(let i=0;i<l/2;i++){
    
    let A1=array[i] ; 
    let B1=array[l-1-i]; 
    
    //console.log(A1);
    //console.log(B1);
    
    if(A1!==B1){
      isPalindrome = false
      break;
    }
     
}

if (isPalindrome === true){
  console.log("Palindrome");
  
}
else {
  console.log("Not a Palindrome");
  
}
}
palindrome("madam")
palindrome("nassak")


