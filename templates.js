const handlers = require("./handlers");

function sharedContent(content, navButton) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Never stop PICKing</title>
      <link href="https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap" rel="stylesheet">
      <link href="public/style.css" rel="stylesheet">
  </head>
  <body>
      <header>
          <h1>PICK your brains</h1>
          <nav>${navButton}</nav>
      </header>
      <main>
          ${content}
      </main>
      <footer>
          <p>PICK Corporation, Copyright 2020</p>
      </footer>
      <script src="public/script.js"></script>
  </body>
  </html>
  `;
}

function home() {
  return sharedContent(
    compileArticles(),
    `<a href="/write" class="nav-button">Write a post</a>`
  );
}

function compileArticles() {
  return handlers.posts
    .map(post => {
      return `
      <article class="post">  
        <div class="post__header"> 
            <h2 class="post__title">${post.title}</h2>
            <p class="post__author">${post.name}</p>
        </div>
        <div <class="post__body">
          ${post.body
            .split("\n\n")
            .map(p => `<p class="post__paragraph">${p}</p>`)}
        </div>
        <div class="post__footer">
            <p class="post__date">${post.date}</p>
            <button href="/" class="post__delete" aria-label="delete post ${
              post.title
            }">Delete</button>
        </div>
    </article>`;
    })
    .join("\n");
}

function missing() {
  return sharedContent(`
  <section>
  <h2 class="error__title">Whoops</h2>
  <img src="https://media.giphy.com/media/Yl5aO3gdVfsQ0/giphy.gif" alt="error-image" class="error__image">
  <p class="error__text">Please feel free to go home.</p>`, `<a href="/" class="nav-button">Home</a>
  </section>`);
}

function write() {
  return sharedContent(
    `
    <form action="/write" method="POST" class="form">
      <label for="name" class="form__label">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" class="form__input" required>
      <label for="title" class="form__label">Post title</label>
      <input type="text" id="title" name="title" placeholder="Blog title" class="form__input" required>
      
      <textarea maxlength="500" id="body" name="body" placeholder="Write us a story..." aria-label="write blog here" class="form__body" required></textarea>
      
      <button type="submit" class="form__submit">Post!</button>
    </form>
  `,
    `<a href="/" class="nav-button">Back</a>`
  );
}

module.exports = { home, missing, write };
