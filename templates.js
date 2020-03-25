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
  return posts.map(post => {
    ``
  }).join('\n')

}


function missing(){
  return sharedContent(`<h2>404 content not found</h2>`)
};

function write(){

}


module.exports = { home , missing, write}