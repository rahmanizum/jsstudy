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