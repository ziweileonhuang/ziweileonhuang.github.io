(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  var follow = document.querySelector(".follow-btn");
  var urls = document.querySelector(".author__urls");
  if (follow && urls) {
    follow.addEventListener("click", function () {
      urls.classList.toggle("is-hidden");
    });
  }
})();
