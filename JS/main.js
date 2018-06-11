
let nav = document.getElementById('navigation');

function toggleMenu() {
    nav.classList.toggle('navigation--visible');
}

//description buttons
function bookOneIntro() {
    var x = document.getElementById("books_one_intro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bookTwoIntro() {
    var x = document.getElementById("books_two_intro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function bookThreeIntro() {
    var x = document.getElementById("books_three_intro");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



