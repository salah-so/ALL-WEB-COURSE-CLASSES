*/
const todolist =[];

function addtodo(){
const inputElemnt =document.querySelector('.js-name-input');
 const name = inputElemnt.value;
 
 todolist.push(name);
console.log(todolist);

inputElemnt.value ='';

} 
*/