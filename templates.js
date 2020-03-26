const posts = require("./database");

function sharedContent(content) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Microblog</title>
      <link href="/public/style.css" rel="stylesheet">
  </head>
  <body>
      <header>
          <h1>Microblogger</h1>
      </header>
      <main>
          ${content}
      </main>
      <footer>
          <p>Copyright</p>
      </footer>
  </body>
  </html>
  `;
}

function home() {
  return sharedContent(compileArticles());
}

function compileArticles() {
  return posts
    .map(post => {
      return `<article class="post">
        <h2 class="post__title">${post.title}</h2>
        ${post.body
          .split("\n\n")
          .map(p => `<p class="post__paragraph">${p}</p>`)}
        <footer class="post__footer">
            <p class="post__author">${post.author}</p>
            <p class="post__date">${post.date}</p>
        </footer>
    </article>`;
    })
    .join("\n");
}

function missing() {
  return sharedContent(`<h2>404 content not found</h2>`);
}

function write() {
  return sharedContent(`
    <button onclick="home" class="back-button">Back</button>
    <form action="/write" method="POST" class="form">
      
      <label for="name" class="form__label">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" class="form__input">
      <br>
      <label for="title" class="form__label">Post title</label>
      <input type="text" id="title" name="title" placeholder="Blog title" class="form__input">
      <br>
      <textarea rows='20' cols='30' maxlength="500" id="body" name="body" placeholder="Write us a story..." aria-label="write blog here" class="form__body"></textarea>
      <br>
      <button type="submit" class="form__submit">Post!</button>
    </form>
  `);
}

module.exports = { home, missing, write };
