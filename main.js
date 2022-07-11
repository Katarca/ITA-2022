// Navbar gap
const nav = document.querySelector("nav");
const root = document.querySelector(":root");
function setNavGap() {
  const navHeight = nav.clientHeight;
  root.style.setProperty("--navHeight", `${navHeight}px`);
}
window.addEventListener("DOMContentLoaded", setNavGap);
window.addEventListener("resize", setNavGap);

// Navbar highlight link
const sectionAll = document.querySelectorAll("section");
function navHighlight() {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add("active");
    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", navHighlight);
window.addEventListener("DOMContentLoaded", navHighlight);
window.addEventListener("resize", navHighlight);

// Burger menu
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navContainer.classList.toggle("open");
});

// Mapping timeline items
const timeline = document.querySelector(".timeline-items");
const timelineContent = [
  {
    year: "1995",
    info: "JavaScript was invented by Brendan Eich",
  },
  {
    year: "1996",
    info: "Netscape 2 was released with JavaScript 1.0",
  },
  {
    year: "1997",
    info: "JavaScript became an ECMA standard (ECMA-262)",
  },
  {
    year: "1997",
    info: "ECMAScript 1 was released",
  },
  {
    year: "1997",
    info: "IE 4 was the first browser to support ES1",
  },
  {
    year: "1998",
    info: "ECMAScript 2 was released",
  },
  {
    year: "1998",
    info: "Netscape 42 was released with JavaScript 1.3",
  },
  {
    year: "1999",
    info: "IE 5 was the first browser to support ES2",
  },
  {
    year: "1999",
    info: "ECMAScript 3 was released",
  },
  {
    year: "2000",
    info: "IE 5.5 was the first browser to support ES3",
  },
  {
    year: "2000",
    info: "Netscape 62 was released with JavaScript 1.5",
  },
  {
    year: "2000",
    info: "Firefox 1 was released with JavaScript 1.5",
  },
  {
    year: "2008",
    info: "ECMAScript 4 was abandoned",
  },
  {
    year: "2009",
    info: "ECMAScript 5 was released",
  },
  {
    year: "2011",
    info: "IE 9 was the first browser to support ES5 *",
  },
  {
    year: "2011",
    info: "Firefox 4 was released with JavaScript 1.8.5",
  },
  {
    year: "2012",
    info: "Full support for ES5 in Safari 6",
  },
  {
    year: "2012",
    info: "Full support for ES5 in IE 10",
  },
  {
    year: "2012",
    info: "Full support for ES5 in Chrome 23",
  },
  {
    year: "2013",
    info: "Full support for ES5 in Firefox 21",
  },
  {
    year: "2013",
    info: "Full support for ES5 in Opera 15",
  },
  {
    year: "2014",
    info: "Full support for ES5 in all browsers",
  },
  {
    year: "2015",
    info: "ECMAScript 6 was released",
  },
  {
    year: "2016",
    info: "Full support for ES6 in Chrome 51",
  },
  {
    year: "2016",
    info: "Full support for ES6 in Opera 38",
  },
  {
    year: "2016",
    info: "Full support for ES6 in Edge 14",
  },
  {
    year: "2016",
    info: "Full support for ES6 in Safari 10",
  },
  {
    year: "2016",
    info: "Full support for ES6 in Firefox 52",
  },
  {
    year: "2018",
    info: "Full support for ES6 in all browsers **",
  },
];

timeline.innerHTML = timelineContent
  .map(
    (infoText) => `
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-date">${infoText.year}</div>
  <div class="timeline-content">
    <p class="body-text-grey">
      ${infoText.info}
    </p>
  </div>
</div>
`
  )
  .join("");
