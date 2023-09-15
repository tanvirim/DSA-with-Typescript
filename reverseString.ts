function reverseString(str:string):string{
   let reverse =""

   //not i =str.length , because str.length-1 is the position of last character
    for(let i =str.length-1 ; i>=0 ; i--){
        reverse +=str.charAt(i)
    }

    return reverse

}

console.log(reverseString("Tanvir"))