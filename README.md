# SomaliOhioxgmovies

A responsive starter website for discovering **free, legally available movies**.

## Run it
1. Extract the ZIP file.
2. Open `index.html` in a browser.

## Add movies
Edit `movies.js`. Add an object to the `movies` array with:
- `title`, `year`, `category`, `description`
- `initials` (2–3 letters shown on the poster)
- `colors` (two CSS color values)
- `watchUrl` (the official authorized viewing page)

Example:
```js
{
  title: "My licensed film",
  year: "2026",
  category: "Drama",
  description: "A short description.",
  initials: "MF",
  colors: ["#345", "#678"],
  watchUrl: "https://example.com/official-film-page"
}
```

Only add films you own, have permission to distribute, or that are legally offered for free by an authorized provider. This starter catalogue links out to providers; it does not host or copy movie files.

## Publish it
You can publish the folder using a static website host such as GitHub Pages or Cloudflare Pages. Publishing requires creating/using an account and following that provider's current setup steps.
