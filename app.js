(() => {
  const dateNode = document.getElementById("today-date");
  const refreshButton = document.getElementById("refresh-btn");
  const now = new Date();
  if (dateNode) {
    dateNode.textContent = new Intl.DateTimeFormat("ar-SA", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    }).format(now);
  }
  refreshButton?.addEventListener("click", () => {
    if (dateNode) {
      dateNode.textContent = new Intl.DateTimeFormat("ar-SA", {
        weekday: "long", year: "numeric", month: "long", day: "numeric"
      }).format(new Date());
    }
    refreshButton.classList.add("spinning");
    window.setTimeout(() => refreshButton.classList.remove("spinning"), 450);
  });

  const links = [...document.querySelectorAll(".nav-link")];
  links.forEach(link => link.addEventListener("click", () => {
    links.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  }));
})();