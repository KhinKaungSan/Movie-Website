const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            const transformMap = movieLists[i].computedStyleMap().get("transform");
            
            let currentTranslateX = 0; 

            if (transformMap) {
                currentTranslateX = transformMap[0].x.value;
            }

            movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    
    console.log(Math.floor(window.innerWidth / 270));
});




//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelector(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        items.classList.toggle("active")
    })
    ball.classList.toggle("active")
})
