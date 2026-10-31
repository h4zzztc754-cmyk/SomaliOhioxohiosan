const grid = document.getElementById("movie-grid");
const search = document.getElementById("search");
const dialog = document.getElementById("movie-dialog");
let activeFilter = "All";

function renderMovies() {
  const term = search.value.trim().toLowerCase();
  const shown = movies.filter(movie =>
    (activeFilter === "All" || movie.category === activeFilter) &&
    `${movie.title} ${movie.description} ${movie.category}`.toLowerCase().includes(term)
  );
  grid.innerHTML = "";
  if (!shown.length) {
    grid.innerHTML = '<div class="empty">No movies found. Try another search or category.</div>';
    return;
  }
  shown.forEach(movie => {
    const card = document.createElement("article");
    card.className = "movie-card";
    const poster = document.createElement("div");
    poster.className = "poster";
    poster.style.setProperty("--c1", movie.colors[0]);
    poster.style.setProperty("--c2", movie.colors[1]);
    const initials = document.createElement("span");
    initials.textContent = movie.initials;
    poster.append(initials);
    const body = document.createElement("div");
    body.className = "card-body";
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${movie.category} · ${movie.year}`;
    const title = document.createElement("h3");
    title.textContent = movie.title;
    const desc = document.createElement("p");
    desc.textContent = movie.description;
    const button = document.createElement("button");
    button.className = "details";
    button.textContent = "VIEW DETAILS →";
    button.addEventListener("click", () => openMovie(movie));
    body.append(meta, title, desc, button);
    card.append(poster, body);
    grid.append(card);
  });
}
function openMovie(movie) {
  document.getElementById("dialog-title").textContent = movie.title;
  document.getElementById("dialog-description").textContent = movie.description;
  const link = document.getElementById("watch-link");
  link.href = movie.watchUrl;
  dialog.showModal();
}
search.addEventListener("input", renderMovies);
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderMovies();
  });
});
document.getElementById("close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
renderMovies();