/* ==========================================
Journey to Nursing Portfolio
Nicole Tan
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOBILE MENU
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }

    /* ==========================
       NAVBAR SCROLL
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
            header.style.background = "rgba(255,255,255,.95)";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.85)";

        }

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const sections = document.querySelectorAll(".section");

    const reveal = () => {

        sections.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                section.classList.add("show");

            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        document.querySelectorAll("section").forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       ACHIEVEMENT COUNTER
    ========================== */

    const counters = document.querySelectorAll(".achievement-card h2");

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseFloat(targetText);

        if (!isNaN(target)) {

            let current = 0;

            const increment = target / 80;

            const update = () => {

                current += increment;

                if (current < target) {

                    counter.innerText =
                        targetText.includes(".")
                            ? current.toFixed(1)
                            : Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = targetText;

                }

            }

            update();

        }

    });

    /* ==========================
       PARALLAX HERO
    ========================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        const offset = window.pageYOffset;

        hero.style.backgroundPositionY = offset * 0.4 + "px";

    });

    /* ==========================
       BUTTON RIPPLE
    ========================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect = button.getBoundingClientRect();

            ripple.style.left = e.clientX - rect.left + "px";
            ripple.style.top = e.clientY - rect.top + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

});

/* ==========================================
BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1500);

});
