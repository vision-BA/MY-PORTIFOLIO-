function myFunction(){
    var hour=new Date().getHours();
    var greetings;
    if (hour<12){
        greetings="Good Morning";
    }else if(hour<18){
        greetings="Good Day";
    }else{
        greetings="Good Night";
    }
    document.getElementById("demo").innerHTML=`${greetings} Bright`;
}
myFunction();
  (function(){
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');
    var workBtn = document.querySelector('.work-with-me');
    var hireSection = document.getElementById('hire');
    var navLinks = document.querySelectorAll('nav a[href^="#"]');
    if (toggle && nav){
      toggle.addEventListener('click', function(){
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!isExpanded));
        nav.classList.toggle('open');
      });
    }
    if (workBtn && hireSection){
      workBtn.addEventListener('click', function(){
        hireSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    if (navLinks && nav){
      navLinks.forEach(function(link){
        link.addEventListener('click', function(){
          if (nav.classList.contains('open')){
            nav.classList.remove('open');
            if (toggle){ toggle.setAttribute('aria-expanded', 'false'); }
          }
        });
      });
    }
  })();
  // Play animation on 'work with me' button when page loads and on click
  const workBtn = document.getElementById('workWithMeBtn');
  function playAnimation() {
    workBtn.classList.add('play');
    setTimeout(() => workBtn.classList.remove('play'), 1200);
  }
  workBtn.addEventListener('click', playAnimation);
  window.addEventListener('DOMContentLoaded', playAnimation);
