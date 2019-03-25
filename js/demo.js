background();

function background(){
    document.addEventListener('DOMContentLoaded', function() {
        var typed = new Typed('.typed',{
            strings: ['froossv.github.io','Hosted with &#9829; in Git','Vathsan&#39;s Lair'],
            typeSpeed: 60
        });
    });

    particlesJS.load('particles-js', 'js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

}
