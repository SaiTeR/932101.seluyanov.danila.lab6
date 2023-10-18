const leftButton = document.getElementById("left")
const bothButton = document.getElementById("both")
const rightButton = document.getElementById("right")

const cat_box = document.getElementById("cat_box")
const cat_img = document.getElementById("cat_img")

const dog_box = document.getElementById("dog_box")
const dog_img = document.getElementById("dog_img")

rightButton.addEventListener("click", () => {
    // event.preventDefault();

    cat_img.style.display = "none"
    cat_box.style.width = "5%"

    dog_img.removeAttribute("style");
    dog_box.style.width = "100%"
    dog_img.style.width = "70%"

})

leftButton.addEventListener("click", () => {
    // event.preventDefault();

    dog_img.style.display = "none"
    dog_box.style.width = "5%"

    cat_img.removeAttribute("style");
    cat_box.style.width = "100%"
    cat_img.style.width = "70%"

})


bothButton.addEventListener("click", () => {
    // event.preventDefault();

    dog_box.removeAttribute("style");
    dog_img.removeAttribute("style");
    cat_box.removeAttribute("style");
    cat_img.removeAttribute("style");
})