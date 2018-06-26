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

// ****** Drop Down Menu ******
function dropDownMenu() {
    var dropDawn = document.getElementById("myTopnav");
    if (dropDawn.className === "topnav") {
        dropDawn.className += " responsive";
    } else {
        dropDawn.className = "topnav";
    }
}

(function() {
    var cx = '012837430047491262480:eiiweu32siw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
