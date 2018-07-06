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

(function () {
    var cx = '012837430047491262480:eiiweu32siw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

//-------->>> Mobil navigation <<<-----------

function openNav() {
    document.getElementById("main").style.display = "none";
    document.getElementById("mySidenav").style.width = "251.10px";
    document.getElementById("main").style.marginLeft = "250px";
    // document.getElementById("rotate").style.transform.rotate = "0.5turn";


}

function closeNav() {
    document.getElementById("main").style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  
}

// function rotateArrow() {
//    var rotate = document.getElementById("rotate").style.transform.rotate = "0.5turn";
//    if(rotate)
// }

var dropdown = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

    

