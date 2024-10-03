const arrows = document.querySelectorAll(".arrow")
const movielists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        movielists[i].style.transform = "translateX(-100px)"
    })
        console.log(movielists[i].computedStyleMap().get("transform"))
})