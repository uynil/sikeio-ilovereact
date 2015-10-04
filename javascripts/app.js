function animateLogo(){
    TweenMax.fromTo("#logo",2,{
        css:{
            // position: 'relative',
            y: "-50px",
        } },{
        css: {
            // position: 'relative',
            y: "0px",
        },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
    });

}
function animateRobot() {
    var t = new TimelineMax({yoyo: true, repeat: -1, ease: Power2.easeInOut});
    // var t = new TimelineMax();
    t.to("#android-robot",1,{rotation: "-=15deg"})
        .to("#android-robot",2,{rotation: "+=15deg"})
        .to("#android-robot",1,{rotation: "-=15deg"});
}

function updateSliderControl() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    var section = document.querySelector(link.getAttribute("href"));
    var sectionTop = section.offsetTop - section.scrollHeight/3;
    var sectionBottom = sectionTop + section.scrollHeight;

    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: { y: topOfElement },
    ease: Power2.easeInOut,
  });
}

function addSmoothScrollingtoElement(elementLinks){
    for(var i = 0; i < elementLinks.length; i++) {
        var link = elementLinks[i];

        if (typeof window.addEventListener === 'function'){
            (function (_link) {
                link.addEventListener('click', function(event){
                    event.preventDefault();

                    var href = _link.getAttribute("href");

                    scrollToElement(document.querySelector(href));
                });
            })(link);
        }
    }
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");
  addSmoothScrollingtoElement(links);
  navs = document.querySelectorAll("#navbar a");
  addSmoothScrollingtoElement(navs);
}

window.onscroll = function() {
  // ...
  updateSliderControl();
}

window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
};