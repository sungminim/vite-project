import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port() {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
        document.body.classList.add('main_ani');
    }, 300); 

    // project Scroll
    var buttons = document.querySelectorAll('.view_projects');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var projectList = document.querySelector('.project_list');
            
            var yOffset = projectList.getBoundingClientRect().top + window.pageYOffset - 88;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        });
    });

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('main_ani');
        }, 1000); 
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

    // Animation for each contents
    gsap.from(".section-who", {
        scrollTrigger: {
            trigger: ".section-who",
            once: true,
            start: "top center",
            end: "top top",
            toggleClass: "ani",
        },
    });
    
    gsap.from(".skill_area", {
        scrollTrigger: {
            trigger: ".skill_area",
            once: true,
            start: "top center",
            end: "top top",
            toggleClass: "ani",
            end: "bottom 0",
        },
    });
    
    gsap.from(".experience_box", {
        scrollTrigger: {
            trigger: ".experience_box",
            once: true,
            start: "top center",
            end: "top top",
            toggleClass: "ani",
            end: "bottom 0",
        },
    });
    
    gsap.from(".contact__inner", {
        scrollTrigger: {
            trigger: ".contact__inner",
            start: "top center",
            end: "top top",
            toggleClass: "ani",
            end: "bottom 0",
        },
    });


}