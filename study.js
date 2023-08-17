//traversing the DOM

const itemList= document.querySelector('#items');

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4';
console.log(itemList.parentNode.parentNode);

//parent element 

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNode -> it include spacing aswell - not much use
console.log(itemList.childNodes);

//children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//First child and Last Child 
console.log(itemList.firstChild);  //giving text not item 
console.log(itemList.lastChild);   //giving text not item 

//First element child and Last element child 
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.fontWeight='bold';
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontSize='25px';

//nextSibling 
console.log(itemList.nextSibling);//not much usefull like fchild

//next ElementSibling
console.log(itemList.nextElementSibling);

//previousSibling 
console.log(itemList.previousSibling)

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//creating Elements
const Div=document.createElement('div');
console.log(Div);
const span=document.createElement('span');
console.log(span);
const h=document.createElement('h');
console.log(h);
const form=document.createElement('form');
console.log(form);
//Create a div 

const newDiv=document.createElement('div');
//add class
newDiv.className='text-bg-primary';
//add id
newDiv.id='created';
//add attribute
newDiv.setAttribute('name','divCreated');

//create textNode
const newDivtxt=document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivtxt);
console.log(newDiv);

//putting inside to container

const position= document.querySelector('header .container');
const headerh1= document.querySelector('header h1');

position.insertBefore(newDiv,headerh1);
newDiv.style.fontSize='35px';