let nav__ulElem = document.querySelector('.nav__ul');

let liElems = nav__ulElem.querySelectorAll('li');

let animation__lineElem = document.querySelector('.animation__line')

let selectedMenu = 1;

liElems.forEach(li => {
    li.addEventListener('mouseover',(e)=>{
        animateLine(e.target.dataset.number);
    });

    li.addEventListener('click',(e)=>{
        selectedMenu = e.target.dataset.number;
        console.log(selectedMenu);
    });
    li.addEventListener('mouseout',()=>{
        animateLine(selectedMenu)
    });
});

function animateLine(index){
    let position = liElems[index].offsetLeft + parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-left').split("px")[0]) +"px"
    let width = liElems[index].offsetWidth - parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-left').split("px")[0]) - parseInt(window.getComputedStyle(liElems[index], null).getPropertyValue('padding-right').split("px")[0])+"px"

    animation__lineElem.style.left = position;
    animation__lineElem.style.width = width
}
animateLine(0);