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

 //선택자
 const cursor = document.querySelector(".mouse__coursor")
 const cursor2 = document.querySelector(".mouse__coursor2")

 //커서 좌표값 불러오기
 window.addEventListener("mousemove", e =>{
     gsap.to(cursor, {duration: 0.3, left: e.pageX -5, top: e.pageY -5});
     gsap.to(cursor2, {duration: 0.8, left: e.pageX -15, top: e.pageY -15});
     
    document.querySelectorAll(".mouse__text span").forEach(span => {
        span.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        span.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });
    });

    document.querySelectorAll(".project_list>li>a").forEach(span => {
        span.addEventListener("mouseenter", () => {
            cursor.classList.add("active1");
            cursor2.classList.add("active1");
        });
        span.addEventListener("mouseleave", () => {
            cursor.classList.remove("active1");
            cursor2.classList.remove("active1");
        });
    });

    
});


}