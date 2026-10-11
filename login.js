const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {


event.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();


// Ma'lumotlarni localStorage'ga saqlash

localStorage.setItem("teacherName", name);
localStorage.setItem("teacherPhone", phone);



// Asosiy sahifaga o'tish

window.location.href = "dashboard.html";


});
