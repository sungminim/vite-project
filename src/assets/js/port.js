import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);

    // project Scroll
        var buttons = document.querySelectorAll('.view_projects');
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                var projectList = document.querySelector('.project_list');
                
                var yOffset = projectList.getBoundingClientRect().top + window.pageYOffset - 88;
                window.scrollTo({ top: yOffset, behavior: 'smooth' });
            });
        });

    // Animation for each project image
    gsap.utils.toArray('.project_img .pc').forEach((img, index) => {
        gsap.from(img, {
            xPercent: -100,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: img,
                start: 'top 80%',
                end: 'bottom 60%',
                scrub: true
            }
        });
    });
}