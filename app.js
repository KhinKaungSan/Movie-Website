const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;

        // Check if there are enough items to scroll
        if (itemNumber - (4 + clickCounter) >= 0) {
            // Check if transform exists before accessing the x property
            const transformMap = movieLists[i].computedStyleMap().get("transform");
            
            let currentTranslateX = 0;  // Default value if transform is not set

            if (transformMap) {
                // Access the first matrix (if it exists) and get the x value
                currentTranslateX = transformMap[0].x.value;
            }

            movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
        } else {
            // Reset to initial position
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(movieLists[i].querySelectorAll("img").length);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelector(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.toggle-ball");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        items.classList.toggle("active")
    })
})
