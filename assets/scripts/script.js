//  close btn for nav
 let toggleMenu = document.getElementById("toggleMenu");
 let LinksList = document.getElementById("LinksList");






// this for togle btoom  sidbar links in responsive
toggleMenu.addEventListener("click",() => {
 
    toggleMenu.classList.toggle("open")
    LinksList.classList.toggle("open")
})



