let nav = document.getElementById('navigation');

function toggleMenu() {
    nav.classList.toggle('navigation--visible');
}

//description buttons
function toggleIntroOne() {
    const bookOne = document.getElementById("book_one_intro");
    bookOne.classList.toggle("open");
}

function toggleIntroTwo() {
    const bookTwo = document.getElementById("book_two_intro");
    bookTwo.classList.toggle("open");
}

function toggleIntroThree() {
    const bookTree = document.getElementById("book_three_intro");
    bookTree.classList.toggle("open");
}

function dropDownMenu() {
    var dropDawn = document.getElementById("myTopnav");
    if (dropDawn.className === "topnav") {
        dropDawn.className += " responsive";
    } else {
        dropDawn.className = "topnav";
    }
}

