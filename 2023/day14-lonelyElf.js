const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const elfZone = document.querySelector(".elf-hangout-zone")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
  /** Challenge:
    - Write a function to duplicate the elf when the button is clicked.
    - See index.css for optional styling challenges.
  **/
  const newElf = elf.cloneNode(true);
  elfZone.appendChild(newElf);
}