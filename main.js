const faqQuestions = document.querySelectorAll("label");

faqQuestions.forEach((item) => item.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        item.click();
    }
}));

const observeElement = (sectionElements) => {
    let options = { threshold: 0.7 };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in_vewe");
            }else{
                entry.target.classList.remove("in_vewe");
            }
        });
    };

    let observer = new IntersectionObserver(callback, options);
    sectionElements.forEach(Element => observer.observe(Element));
};

let elementsToObserve = document.querySelectorAll(".aemashe");

observeElement(elementsToObserve);

