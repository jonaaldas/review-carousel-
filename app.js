let reviews = [
    {
        img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        name: 'Ryan Seth',
        role: 'Sr Software Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo impedit excepturi officiis voluptas quam perferendis, minus temporibus consequatur velit id non odit cupiditate, repellat nobis nihil provident dicta adipisci sapiente?'
    },
    {
        img: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        name: 'Lisa Karen ',
        role: 'UX/UI Designer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo impedit excepturi officiis voluptas quam perferendis, minus temporibus consequatur velit id non odit cupiditate, repellat nobis nihil provident dicta adipisci sapiente?'
    },
    {
        img: 'https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        name: 'Mike Chen',
        role: 'Sr Software Developer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo impedit excepturi officiis voluptas quam perferendis, minus temporibus consequatur velit id non odit cupiditate, repellat nobis nihil provident dicta adipisci sapiente?'
    },

]

// DOM elements
const title = document.querySelector('.title');
const img = document.querySelector('img');
const name1 = document.querySelector('.name');
const role = document.querySelector('.role');
const review = document.querySelector('.review-p');

// arrows
const arrowLeft = document.querySelector('.left-arrow');
const arrowRight = document.querySelector('.right-arrow');

//button

const btn = document.querySelector('.btn');

//starting state 
let startingState = 0;



arrowRight.addEventListener('click', function(){
    startingState++
    if(startingState > reviews.length -1){
        startingState = 0
    } 
        parseName(startingState)
});

arrowLeft.addEventListener('click', function(){
    startingState--;

    if(startingState < 0){
        startingState = reviews.length - 1
    } 
    parseName(startingState)
});

//suprise button
btn.addEventListener('click', function(){
    startingState = Math.abs(Math.round((Math.random() * reviews.length) - 1));
    parseName(startingState)
})

function parseName(startingState){
    img.src = reviews[startingState].img;
    name1.innerText = reviews[startingState].name;
    role.innerText = reviews[startingState].role;
    review.innerText = reviews[startingState].review;
}