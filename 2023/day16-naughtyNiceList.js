/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

btn.addEventListener("click", sortLists)

function sortLists() {
    for (let person in sorteesArr) {
        if (sorteesArr[person].hasBeenGood === false) {
            let item = document.createElement("li");
            item.innerText = sorteesArr[person].name;
            naughtyList.append(item)   
        } else {
            let item = document.createElement("li");
            item.innerText = sorteesArr[person].name;
            niceList.append(item)
        }
    }
}