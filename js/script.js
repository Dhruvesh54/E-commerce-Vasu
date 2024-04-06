// ========================= Navbar =========================
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
 
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

//  ========================= slider =========================

$(document).ready(function () {
    $(".happy-customer-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 50000,
        responsive: [
        {
        breakpoint: 766,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });
    $(".prev-btn").click(function () {
        $(".happy-customer-slider").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".happy-customer-slider").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".happy-customer-slider").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });
});

// ========================= sign up dialog box close =========================

const dialog = document.getElementById("myDialog"); 

function showDialog() { 
  dialog.show(); 
} 

function closeDialog() { 
  dialog.close(); 
} 

// ================================= client section =================================

    const tabs=document.querySelectorAll('.client-link');
    const allctn=document.querySelectorAll('.client-tab-cnt');
    
    tabs.forEach((tab,index)=>{
      tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add('active')
        allctn.forEach(content=>{content.classList.remove('active')})
        allctn[index].classList.add('active');
      })
    })

// ======================== category filter =================================
const accordionBtns = document.querySelectorAll(".filter-list button");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});














