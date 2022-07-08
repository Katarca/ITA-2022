// Navbar gap
const nav = document.querySelector("nav");
const about = document.getElementById("about");
const history = document.getElementById("history");
const timelineSection = document.getElementById("timeline");
const today = document.getElementById("today");
const root = document.querySelector(":root");

function setNavGap() {
  const navHeight = nav.clientHeight;
  let paddingAbout = 0;
  let paddingHistory = 0;
  let paddingTimeline = 0;
  let paddingToday = 0;
  const distAbout = about.getBoundingClientRect().top - navHeight;
  const distHistory = history.getBoundingClientRect().top - navHeight;
  const distTimeline = timelineSection.getBoundingClientRect().top - navHeight;
  const distToday = today.getBoundingClientRect().top - navHeight;
  if (distAbout < 0 && Math.abs(distAbout) < navHeight) {
    paddingAbout = Math.abs(distAbout);
  } else if (distAbout < 0 && Math.abs(distAbout) >= navHeight) {
    paddingAbout = navHeight;
  }
  if (distHistory < 0 && Math.abs(distHistory) <= navHeight) {
    paddingHistory = Math.abs(distHistory);
  } else if (distHistory < 0 && Math.abs(distHistory) >= navHeight) {
    paddingHistory = navHeight;
  }
  if (distTimeline < 0 && Math.abs(distTimeline) <= navHeight) {
    paddingTimeline = Math.abs(distTimeline);
  } else if (distTimeline < 0 && Math.abs(distTimeline) >= navHeight) {
    paddingTimeline = navHeight;
  }
  if (distToday < 0 && Math.abs(distToday) <= navHeight) {
    paddingToday = Math.abs(distToday);
  } else if (distToday < 0 && Math.abs(distToday) >= navHeight) {
    paddingToday = navHeight;
  }
  root.style.setProperty("--navHeight", `${navHeight}px`);
  root.style.setProperty("--aboutPaddingTop", `${paddingAbout}px`);
  root.style.setProperty("--historyPaddingTop", `${paddingHistory}px`);
  root.style.setProperty("--timelinePaddingTop", `${paddingTimeline}px`);
  root.style.setProperty("--todayPaddingTop", `${paddingToday}px`);
}

window.addEventListener("scroll", setNavGap);
window.addEventListener("DOMContentLoaded", setNavGap);
window.addEventListener("resize", setNavGap);

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
