   
        var slideIndex = 1;
        showDivs(slideIndex);
        function plusDivs(n) {
            showDivs(slideIndex += n);
        }
        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mp1");
            if (n > x.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = x.length }
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[slideIndex - 1].style.display = "block";
        }
burger=document.querySelector('.burger')
heading=document.querySelector('.heading')
nav=document.querySelector('.nav')

burger.addEventListener('click',()=>{
    nav.classList.toggle('v-class-resp')
    heading.classList.toggle('h-nav-resp')
    
    
})