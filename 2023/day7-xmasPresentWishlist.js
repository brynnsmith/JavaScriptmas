const wishlist = [
    "GeForce RTX 3060 Graphics Card",
    "Quality Street chocolates",
    "Slippers",
    "Second monitor for computer",
    "Cat climbing wall shelves"
    // TODO: Add more items here
  ];
  
  /** Challenge: 
    - Iterate over the wishlist array.
    - Dynamically render your wishlist from the array.
    - Style the wishlist with CSS.
  **/
  
  const listArea = document.querySelector(".wishlist");
  const list = document.createElement("ul");
  listArea.appendChild(list);
  wishlist.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    list.append(listItem);
  })