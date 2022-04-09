

    //Collapsible sections
    var coll = document.getElementsByClassName("cbcollapsible");
                var i;
                
                for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                } else {
                  content.style.display = "block";
                }
                });
                }
    
    
    //for back-to-top button
    //first step-get the button
    var mybutton = document.getElementById("myArrow");
    //when user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };
    
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {mybutton.style.display = "none";}
    };
     //when user clicks on button,scroll to top of document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    
     //for theme change
    function myFunction() {var element = document.getElementById("dark");
     element.classList.toggle("mystyle");}
    
    




