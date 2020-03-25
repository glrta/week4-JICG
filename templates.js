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
  `
}

function home(posts) {
  sharedContent(compileArticles(post))
}

function compileArticles(posts) {
  return posts.map(post => {
    return `<article class="post">
        <h2 class="post__title">${post.title}</h2>
        ${post.body.split('\n\n').map(p => `<p class="post__paragraph">${p}</p>`)}
        <footer class="post__footer">
            <p class="post__author"></p>${post.author}</p>
            <p class="post__date">${post.date}</p>
        </footer>
    </article>`
  }).join('\n')
}


function missing(){
  return sharedContent(`<h2>404 content not found</h2>`)
};

function write(){

}


module.exports = { home , missing, write}