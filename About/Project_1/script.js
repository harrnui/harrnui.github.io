
const content = document.querySelectorAll('.animate-on-scroll');

    

const options = {
    rootMargin: "0px",
    threshold: 1.0
};

const observer = new IntersectionObserver ( (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');

        }else{
            entry.target.classList.remove('animate');
        }
    }, options);
});

content.forEach((el) => observer.observe(el));