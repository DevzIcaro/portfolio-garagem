/*NAVBAR MENU*/
function showSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = 'none'
}
/* FIM NAVBAR MENU*/

/*NAVBAR SCROLL EVENT*/
window.addEventListener("scroll", function(){
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
/*FIM NAVBAR SCROLL EVENT*/

document.querySelector("#items").addEventListener("wheel", event => {
  if(event.deltaY > 0){
    event.target.scrollBy(350, 0)
  } else {
    event.target.scrollBy(-350, 0)
  }
})