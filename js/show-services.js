const button = document.querySelector(".services-section__more-btn");
const container = document.querySelector(".services-section__list");
const text = document.querySelector(".services-section-change");
const arrow = document.querySelector(".services-section__more-svg")

button.addEventListener("click", () => {
    container.classList.toggle("limit-content");

    if (text.textContent == "more services") {
        text.textContent = "less services";  
        arrow.style.cssText = `
            transform: rotate(180deg);
        `;
    } else {
        text.textContent = "more services";
        arrow.style.cssText = `
            transform: rotate(0);
        `;         
    }
});
