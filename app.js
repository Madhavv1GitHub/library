const myLib=[];


function Book(title,author,page){
    this.title=title;
    this.author=author;
    this.page=page;

}





let addbook=document.querySelector('.add-book');
let forms=document.querySelector('.forms-hidden');
let submit=document.querySelector('input[type="submit"]');
let display=document.querySelector('.main');


let title=document.querySelector('#title');
let author=document.querySelector('#author');
let page=document.querySelector('#page');


addbook.addEventListener('click',function(){
    forms.classList.add('forms-show');
    
});


submit.addEventListener('click',function(event){
   
    items= new Book(title.value,author.value,page.value);
    event.preventDefault();
    myLib.push(items);
    let div=document.createElement('div');
    div.classList.add('card');
    let element=display.appendChild(div);
    displayBooks(element);
    

})


function displayBooks(element)
{

    element.innerHTML=`<h3>Title:${this.title.value}</h3>
    <h3>author:${this.author.value}</h3>
    <h3>Pages:${this.page.value}</h3>
    <input type="checkbox">
    <button class="rmv">Remove</button>`
    

}

