/* SORT */
const backdrop = document.querySelector(".backdrop-sorting");
const sortBtnOpen = document.querySelector(".sort-btn-open");
const nameSort = document.getElementById("name-sort");

const toggleSort = () => backdrop.classList.toggle("is-hidden");

sortBtnOpen.addEventListener("click", () => {
    toggleSort();
    setTimeout(() => {
        document.querySelectorAll(".mobile-sorting__name-sort").forEach((elem) => {
            if (elem.textContent == nameSort.textContent) {
                elem.style.color = "#FF4242";
            } else {
                elem.style.color = "#F9F9F9";
            }
        });
    }, 50);
});

backdrop.addEventListener("click", (event) => {
    if (event.target.className === "backdrop-sorting") {
        toggleSort();
    }

    if (event.target.className === "mobile-sorting__name-sort") {
        nameSort.textContent = event.target.textContent;
        toggleSort();
    }
});

/* FILTER */
const filterBtnOpen = document.querySelector(".filter-btn-open");
const filterBtnClose = document.querySelector(".aside-btn-close");
const aside = document.querySelector(".aside");

filterBtnOpen.addEventListener("click", () => {
    aside.style.transform = 'translateX(0%)';
    document.body.classList.toggle('is-scroll-disabled');
});

filterBtnClose.addEventListener("click", () => {
    aside.style.transform = 'translateX(-1000%)';
    document.body.classList.toggle('is-scroll-disabled');
});