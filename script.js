// déclaration du bouton
btnReturn = document.getElementById("btn-return");

// montrer le bouton si on scrolle de 100 px
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
        btnReturn.style.display = "block";
    }else{
        btnReturn.style.display = "none";
    }
}
// fonction goToTop
function goToTop(){
    // fct scrollIntoView() => faire défiler la page pour afficher l'élément auquel elle est appellée.
    // ici: nous l'appellons sur le body afin que la page défile vers le haut.
    document.body.scrollIntoView({
        behavior : "smooth",
    });
}
// appel goToTop() au clic du bouton de retour en haut

btnReturn.addEventListener("click", goToTop);





var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }    
    // document.querySelector(".txt-rotate").classList.add("wrap");
  };

//   apparition des tarifs
const slidingAnime = document.querySelector('.slideIn')  
window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;      
    
    const topElemetToTopViewport = slidingAnime.getBoundingClientRect().top;        
    
    if(scrollTop > (scrollTop + topElemetToTopViewport).toFixed() -      clientHeight * 0.80) 
    {slidingAnime.classList.add('start')}})