const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    // change the theme of the website
    document.body.classList.toggle("dark-theme");
});

gsap.fromTo(
    ".container",
    {
        opacity: 0
    },
    {
        opacity: 1,
        stagger: 0.1,
        duration: 1.5
    },
    0.2
);

gsap.fromTo(
    "main",
    {
        opacity: 0,
        x: -100
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    0.4
);
gsap.fromTo(
    ".logo",
    {
        opacity: 0,
        y: -40
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5
    },
    0.8
);
gsap.fromTo(
    ".left-nav li",
    {
        opacity: 0,
        x: -40
    },
    {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5
    },
    0.8
);

gsap.fromTo(
    "header",
    {
        opacity: 0,
        y: 20
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    1
);

gsap.fromTo(
    ".trending",
    {
        opacity: 0
    },
    {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    1.2
);

gsap.fromTo(
    ".top-creators",
    {
        opacity: 0
    },
    {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    1.4
);

gsap.fromTo(
    ".balance",
    {
        opacity: 0
    },
    {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    1.8
);

gsap.fromTo(
    ".nft-of-the-day",
    {
        opacity: 0
    },
    {
        opacity: 1,
        stagger: 0.1,
        duration: 0.5
    },
    2
);
