//taking input from user

 size = prompt('what size of grid you need?')
 if(size>100){
    prompt('below 100');
 }
 else{
// grid size
 amount=size*size;
// heigth and width decider
gap = 2 * (size-1);
border = 2 * size;
Widtht = 930 - (gap+border);
width=Widtht/size;
height=width;
console.log(height);
// creates the grid and gives class and adds to parent div container
for (i=1;i<=amount;i++){
 // creation   
content = document.createElement('div');
content.classList.add('div');
// addition
container = document.querySelector('#container');
container.appendChild(content);

}

// change background on mouseover
 div =document.querySelectorAll('.div');
 div.forEach(div => {
    div.style.width=width+'px';
    div.style.height=height+'px';
    div.addEventListener('mouseover',()=>{
        div.classList.add('color');

    });
    
 });
}
// more features to add
//Additionally, implement a progressive darkening effect
// where each interaction adds 10% more black or color to the
// square. The objective
// is to achieve a completely black square only after ten interactions.
// add a pause option which which stops the colouring
// add a option to change color