const getRating = document.querySelectorAll(".rating__get");
const bones = document.querySelectorAll(".rating__item-bone");

/**
 * parse all rating blocks into an array of objects
 */

let arrayItems = new Array();
let counter = 0;
for (let i = 0; i < getRating.length; i++) {
    let tempArr = [];
    let set = ((i + 1) * 5);
    for (let j = counter; j <= set; j++) {
        tempArr.push(bones[j]);
        counter++;

        if (counter == set) {
            break;
        }
    }

    arrayItems[i] = {
        getRating: getRating[i].textContent,
        bones: tempArr
    }
}

/**
 * style change If the rating is not equal to 5
 */

for (obj of arrayItems) {
    if (obj.getRating < 5) {
        for(let i = 5; i > obj.getRating; i--){
            obj.bones[i - 1].classList.add("inactive");
        } 
    }
}