const main = document.querySelector("main");
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayList() {
  main.innder.HTML = "  "
  list.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    main.append(div);
  });
}

function sortDescending(){

} 

sortDescending();
displayList();
