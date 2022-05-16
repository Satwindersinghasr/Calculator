let string = " ";
let buttons = document.querySelectorAll('.row');
Array.from(buttons).forEach((button)=>{
 button.addEventListener('click',(e)=>{
     if(e.target.innerText == '='){
         string = eval(string);
         document.querySelector('input').value = string;
     }
     else if(e.target.innerText == 'C') {
         string = " "
        document.querySelector('input').value = string;
     }
     else{
   console.log(e.target);
   string = string + e.target.innerText;
   document.querySelector('input').value = string;
}
 })
})