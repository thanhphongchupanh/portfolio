const menu = document.querySelector(".navbar_links");
const menuButton = document.querySelector(".navbar_icons");
const overlay = document.querySelector("#overlay");


// làm cho nút button nghe được động tác Click của User
// tạo class mới để qua Css lại để hiển thị lên màn hình
//toggle: chuyển đổi, classList: tạo class
menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})

overlay.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})


