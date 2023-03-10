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



// ------------------------- Create blog cards Start -------------------------



// ------------------------- General Section Start --------------------------

const generalApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
const generalBlogSectionMain = document.querySelector('#general-section .blog--section__main')

async function displayGeneralNews() {
    const response = await fetch(generalApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        generalBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Sports</p>
                </div>
            </div>
        `
    }
}

displayGeneralNews()

// ------------------------- General Section End --------------------------


// ------------------------- Business Section Start --------------------------

const businessApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/business/in.json";
const businessBlogSectionMain = document.querySelector('#business-section .blog--section__main')

async function displayBusinessNews() {
    const response = await fetch(businessApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        businessBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Business</p>
                </div>
            </div>
        `
    }
}

displayBusinessNews()

// ------------------------- Business Section End --------------------------


// ------------------------- Sports Section Start --------------------------

const sportsApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";
const sportsBlogSectionMain = document.querySelector('#sports-section .blog--section__main')

async function displaySportsNews() {
    const response = await fetch(sportsApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        sportsBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Sports</p>
                </div>
            </div>
        `
    }
}

displaySportsNews()

// ------------------------- Sports Section End --------------------------


// ------------------------- Health Section Start --------------------------

const healthApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";
const healthBlogSectionMain = document.querySelector('#health-section .blog--section__main')

async function displayHealthNews() {
    const response = await fetch(healthApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        healthBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Sports</p>
                </div>
            </div>
        `
    }
}

displayHealthNews()

// ------------------------- Health Section End --------------------------


// ------------------------- Entertainment Section Start --------------------------

const entertainmentApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json";
const entertainmentBlogSectionMain = document.querySelector('#entertainment-section .blog--section__main')

async function displayEntertainmentNews() {
    const response = await fetch(entertainmentApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        entertainmentBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Sports</p>
                </div>
            </div>
        `
    }
}

displayEntertainmentNews()

// ------------------------- Entertainment Section End --------------------------


// ------------------------- Science Section Start --------------------------

const scienceApiUrl = "https://saurav.tech/NewsAPI/top-headlines/category/science/in.json";
const scienceBlogSectionMain = document.querySelector('#science-section .blog--section__main')

async function displayScienceNews() {
    const response = await fetch(scienceApiUrl);
    const data = await response.json();
    const articles = data.articles


    for (let i = 0; i < 10; i++) {
        scienceBlogSectionMain.innerHTML += `
            <div class="blog">
                <div class="blog__img--wrapper">
                    <img src="${articles[i].urlToImage}" alt="">
                </div>

                <div class="blog__description--wrapper">
                    <h3>${articles[i].title}</h3>
                    
                    <div class="details">
                    <p class="author--wrapper">By <span class="author">${articles[i].author}</span></p>
                        
                        <p class="date--wrapper">
                            <span class="month">March</span> <span class="day">10</span>, <span>2023</span>
                        </p>
                    </div>
                </div>
                
                <hr>

                <div class="blog__genre--wrapper">
                    <p class="blog__genre">Sports</p>
                </div>
            </div>
        `
    }
}

displayScienceNews()

// ------------------------- Science Section End --------------------------



// ------------------------- Create blog cards End -------------------------