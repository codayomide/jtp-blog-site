let left = document.querySelectorAll('.left-btn');
let right = document.querySelectorAll('.right-btn');

let blog = document.getElementsByClassName('blog');
let blog_page = Math.ceil(blog.length/4);

let l = 0;
let movePer = 25;
let maxMove = 150;

let right_mover = ()=>{
    l = l + movePer;
    if (blog == 1){l = 0; }
    for(const i of blog)
    {
        if (l > maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';
    }
}

let left_mover = ()=>{
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of blog){
        if (blog_page>1){
            i.style.left = '-' + l + '%';
        }
    }
}

right.onclick = ()=>{right_mover();}
left.onclick = ()=>{left_mover();}