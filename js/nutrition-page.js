const backdrop = document.querySelector(".backdrop-sorting");
const sortBtnOpen = document.querySelector(".sort-btn-open");
const nameSort = document.getElementById("name-sort");

const toggleSort = () => backdrop.classList.toggle("is-hidden");

sortBtnOpen.addEventListener("click", () => {
    toggleSort();
    setTimeout(() => {
        document.querySelectorAll(".mobile-sorting__name-sort").forEach((elem) => {
            if (elem.textContent == nameSort.textContent) {
                elem.style.color = "#FF9F0E";
            } else {
                elem.style.color = "#181817";
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



/**
 * Add products from fake API store
 */

const paginationBlock = document.querySelector(".pagination-block");
const listCards = document.querySelector(".nutrition-section__list");
const btnPrev = document.querySelector(".nutrition-section__button.prev");
const btnNext = document.querySelector(".nutrition-section__button.next");
const MAX_NUMBER_PAGES_IN_BLOCK = 7;
let countShowCards = 8;

async function main() {
    const products = await fetchData("https://fakestoreapi.com/products");

    let countPage = Math.ceil(products.length / parseInt(countShowCards));

    addCardOnPage(0, countShowCards, products);
    addPagination(1, MAX_NUMBER_PAGES_IN_BLOCK, countPage);

    btnPrev.addEventListener('click', (elem) => {
        const checkedElem = document.querySelector(".pagination-block__input[checked]");
        const prevId = parseInt(checkedElem.id) - 1;

        if (prevId > 0) {
            refreshPagination(prevId, products, countPage);
        }
    });

    btnNext.addEventListener('click', (elem) => {
        const checkedElem = document.querySelector(".pagination-block__input[checked]");
        const nextId = parseInt(checkedElem.id) + 1;

        if (nextId <= countPage) {
            refreshPagination(nextId, products, countPage);
        }
    });

    paginationBlock.addEventListener('click', (event) => {
        if (event.target.tagName === 'INPUT') {
            let numChangePage = event.target.id;

            if (numChangePage == "last") {
                numChangePage = countPage;
            } else if (numChangePage == "first") {
                numChangePage = 1;
            } else {
                numChangePage = parseInt(event.target.id);
            }

            refreshPagination(numChangePage, products, countPage);
        }
    });
}

main();

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error.message);
    }
}

function createCardHTML(id, image, price, title) {
    return `
        <li class="nutrition-section__item">
        <article class="nutrition-card">
            <img class="nutrition-card__image" src="${image}" alt="item">
                <div class="nutrition-card__code-rating-box">
                    <p class="nutrition-card__code-box">Vendor code: <span class="nutrition-card__id">${id}</span></p>
                    <ul class="nutrition-card__box-rating">
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                        <li class="nutrition-card__item-rating">
                            <svg width="16px" height="16px">
                                <use href="./images/icons.svg#icon-star"></use>
                            </svg>
                        </li>
                    </ul>
                </div>
                <p class="nutrition-card__description">
                    ${title}
                </p>
                <div class="nutrition-card__price-box">
                    <p class="nutrition-card__price-with-discount"><span>${price}</span>$</p>
                    <p class="nutrition-card__price-standart"><span>${price}</span>$</p>
                </div>
                <button class="nutrition-card__button button" type="button">Buy</button>
        </article>
    </li>
    `
}

function createNumberPageHTML(number) {
    return `
    <div class="pagination-block__field">
        <input class="pagination-block__input" type="radio" id="${number}" name="pagination" value="${number}" ${(number === 1) ? "checked" : ""}> 
        <label class="pagination-block__label" for="${number}">${number}</label>
    </div>`
}

function createFirstOrLastPageHTML(id, number) {
    return `
    <div class="pagination-block__field">
        <input class="pagination-block__input" type="radio" id="${id}" value="${number}" name="pagination">
        <label class="pagination-block__label" for="${id}">${number}</label>
    </div>`
}

function createEtcHTML() {
    return `
    <div class="pagination-block__field pagination-block__field--inactive">...</div>
    `
}

function addPagination(start, end, countPage) {
    if (countPage >= MAX_NUMBER_PAGES_IN_BLOCK) {
        const lastPage = createFirstOrLastPageHTML("last", countPage);
        const firstPage = createFirstOrLastPageHTML("first", 1);

        paginationBlock.insertAdjacentHTML('beforeend', firstPage);
        paginationBlock.insertAdjacentHTML('beforeend', createEtcHTML());

        for (let i = start; i <= end; i++) {
            let numberPageBlock = createNumberPageHTML(i);
            paginationBlock.insertAdjacentHTML('beforeend', numberPageBlock);
        }

        paginationBlock.insertAdjacentHTML('beforeend', createEtcHTML());
        paginationBlock.insertAdjacentHTML('beforeend', lastPage);
    } else {
        for (let i = start; i <= countPage; i++) {
            let numberPageBlock = createNumberPageHTML(i);
            paginationBlock.insertAdjacentHTML('beforeend', numberPageBlock);
        }
    }
}

function addCardOnPage(startIndex, endIndex, products) {
    for (let i = startIndex; i < endIndex; i++) {
        if (products[i]?.id) {
            let card = createCardHTML(products[i].id, products[i].image, products[i].price, products[i].title);
            listCards.insertAdjacentHTML('beforeend', card);
        }
    }
}

function refreshPagination(numChangePage, products, countAllPages) {
    const numChecked = document.querySelector(`.pagination-block__input[checked]`);

    if (numChangePage == numChecked.id) {
        return;
    }

    document.querySelector(".nutrition-section__header").scrollIntoView({ behavior: 'smooth' });
    numChecked.removeAttribute('checked');
    let endIndex = countShowCards * numChangePage;
    let startIndex = endIndex - countShowCards;

    listCards.innerHTML = "";
    addCardOnPage(startIndex, endIndex, products);

    if ((numChangePage <= countAllPages && countAllPages > MAX_NUMBER_PAGES_IN_BLOCK)) {
        paginationBlock.innerHTML = "";
        const marginLeft = parseInt(MAX_NUMBER_PAGES_IN_BLOCK / 2);
        let indexStart = numChangePage - marginLeft;

        if (indexStart <= 0) {
            indexStart = 1;
        }

        if ((numChangePage + marginLeft) > countAllPages || numChangePage == countAllPages) {
            indexStart = countAllPages - MAX_NUMBER_PAGES_IN_BLOCK + 1;
        }

        addPagination(indexStart, (MAX_NUMBER_PAGES_IN_BLOCK + indexStart - 1), countAllPages);
    }

    const firstChecked = document.querySelector(`.pagination-block__input[id="1"]`);

    if (firstChecked) {
        firstChecked.removeAttribute('checked');
    }

    const setChecked = document.querySelector(`.pagination-block__input[id="${numChangePage}"]`);
    setChecked.setAttribute("checked", "checked");
    setChecked.checked = true;
}