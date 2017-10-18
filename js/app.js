var contacts = [
    {
        title: 'LinkedIn',
        iclass: 'fa fa-linkedin-square',
        link: 'https://www.linkedin.com/in/zjzhao/'
    },
    {
        title: 'Instagram',
        iclass: 'fa fa-instagram',
        link: 'https://www.instagram.com/jeremytchao/'
    },
    {
        title: 'Flickr',
        iclass: 'fa fa-flickr',
        link: 'https://www.flickr.com/photos/90156428@N06/'
    },
    {
        title: 'Facebook',
        iclass: 'fa fa-facebook-official',
        link: 'https://www.facebook.com/JeremyTchao'
    }
]; 

var isOpen = false;

function computeBlackBorder () 
{
    
    var blacb =($(window).width() - $(".container").width()) / 2;

    if(blacb <= 260)
        return 260;
    
    
    else 
    return blacb;
}

var blackBorder = computeBlackBorder();

function adjustSideNavWidth (width) {
    document.getElementById("mySidenav").style.width = `${width}px`;
    document.getElementById("container").style.marginLeft = `${width}px`;
}

$(window).resize(function() {
    blackBorder = computeBlackBorder();
    
    if (isOpen === true) {
        adjustSideNavWidth(blackBorder);
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 302){
        $('.navsfixed').css("display", "block");
    }
    else {
        $('.navsfixed').css("display", "none");
    }
});



$(document).ready(function() 
{
   
    checkWidth();
    // Bind event listener
    
});


$(window).resize(checkWidth);










// function to open the side nav bar
function openNav() {
    isOpen = false? true: false;
    var blackBorder = computeBlackBorder();
    
    // document.getElementById("mySidenav").style.width = `${blackBorder + 200}px`;
    // document.getElementsByClassName("container")[0].style.marginLeft = `${200 + 80}px`;

    document.getElementById("mySidenav").style.width = `${blackBorder}px`;
    document.getElementsByClassName("container")[0].style.marginLeft = `${blackBorder}px`;
    // document.getElementById("mySidenav").style.width = "320px";
    // document.getElementsByClassName("container")[0].style.marginLeft = `320px`;
}

// function to close the side nav bar
function closeNav() {
    isOpen = true? false: true;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("container")[0].style.marginLeft = "auto";
}




    // function checkWidth() 
    // {
    //     var $window = $(window);
    //     var windowsize = $window.width();
        
     



    //     if( windowsize < 1250) 
    //     {
    //         document.getElementsByClassName("container")[0].style.width = "1024px";
    //         document.getElementsByClassName("navs")[0].style.width = "1024px";
    //         document.getElementsByClassName("navs")[1].style.width = "1024px";
    //         document.getElementById("navs-internal").style.width = "1024px";
    //         document.getElementById("navs-internal").style.width = "1024px";
           

    //     }

    //     else 
    //     {
    //         document.getElementsByClassName("container")[0].style.width = "1200px";
    //         document.getElementsByClassName("navs")[0].style.width = "1200px";
    //         document.getElementsByClassName("navs")[1].style.width = "1200px";
    //         document.getElementById("navs-internal").style.width = "1200px";
    //     }
       
    // }