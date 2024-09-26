// document.addEventListener("DOMContentLoaded", function() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true,
//       smoothMobile: true,
//       inertia: 0.8,
//       multiplier: 1.3,
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//           return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//           return {
//               top: 0,
//               left: 0,
//               width: window.innerWidth,
//               height: window.innerHeight,
//           };
//       },
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// });

$(document).ready(function() {
  let currentIndex = 0;
  const items = $('.diamond-links__item');
  const itemCount = items.length;
  let interval;

  function activateNextItem() {
    items.removeClass('active');
    $(items[currentIndex]).addClass('active');
    currentIndex = (currentIndex + 1) % itemCount;
  }

  function startInterval() {
    interval = setInterval(activateNextItem, 2000);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  items.hover(function() {
    stopInterval();
    items.removeClass('active');
    $(this).addClass('active');
    currentIndex = items.index(this);
  }, function() {
    startInterval();
  });

  activateNextItem();
  startInterval();
});


var pl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "-30% top",
    end: "bottom bottom",
    markers: true,  
    scroller: "body",
    scrub: 1,
  },
});

pl.to(".sand", {
  x: -240,
  ease: "sine.out",
  force3D: true,
}, 'd');

pl.to(".cab", {
  y: -200,
  ease: "sine.out",
  force3D: true,
}, 'd');

pl.to(".big-img", {
  scale: 1.1,
  ease: "sine.out",
  force3D: true,
}, 'd');

if (performance.navigation.type === 1) {
  // Clear cache by appending a unique query string to the URL
  let url = new URL(window.location.href);
  url.searchParams.set("cache_bust", new Date().getTime());
  window.location.replace(url.href);
}