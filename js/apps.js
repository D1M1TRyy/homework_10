const nav_links = document.getElementById("navigation_links");
const humburger = document.getElementById("humburger");

function togglebutton() {
    nav_links.classList.toggle("active_nav");
    console.log("hello")
}

humburger.onclick = togglebutton;
