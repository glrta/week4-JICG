# PICK your brains 

![title](https://media.giphy.com/media/107xmRfbV37Bq8/giphy.gif)

---

## Product DEMO
![site](https://i.imgur.com/bHqxu5o.png)


---

### Work process

![process](https://media.giphy.com/media/Wf4J5zTj6niOk/giphy.gif)

---

#### Miro

![](https://i.imgur.com/Ng0yiK1.png =800x)


---

- First we put down post-it notes for ideas
- Then we organised post-its by themes
- Next we did a flow-chart representing the backend logic, and a wireframe for the design
- You can raise questions and notes, like the yellow one in the flowchart.

---

![miro](https://media.giphy.com/media/hTrxfLbqXJCfjiFW0X/giphy.gif)


---


#### Jitsi

---

- Our own names for rooms allowed easy communication between pairs
- If people in JICG1 wanted to go into JICG2 they only had to change a number in their URL.
-  Cool features like speaker stats

---

#### Heroku

![haiku](https://media.giphy.com/media/3o7TKrwVvGPjFtZ2Rq/giphy.gif)

---

- Used Heroku from the command line
- Connected to a remote repository, so that we had two remotes:
    - origin (i.e. github)
    - heroku 
- to push to origin we used `git push origin branch-name`
- to push to heroku `git push heroku master`

---

- to deploy in Heroku before merging to master `git push heroku branchName:master`
    - Learnt something new about git push here: the first argument (e.g. origin) is the name of the remote, and the second argument (e.g. master) is the branch in the remote that you want to push to. If you want to push a specific local branch to a remote, you use the colon syntax above.
- Access already created website`heroku git:remote -a serene-peak-45045`


---

### Remaining issues
![](https://media.giphy.com/media/Y0gka4ki1Nh8AvMY5X/giphy.gif)

---

- Delete functionality
- Remaining handlers
- Needed more tests (& project not TDD)
- Paragraphs entered in the textbox aren't rendered as separate p elements, although we did write most of the code to make this happen

---

### Learning objectives
![team](https://media.giphy.com/media/XgN7BVqzswKxrLWNkj/giphy.gif)

---

- **Gio**: Node
- **Jack**: Miro, server-side Javascript, Jitsi, Node modules
- **Ivo**: Heroku, node servers, paths + routers
- **Chloe**: Node, testing


---

### What we're proud of

- Efficient team work - lots of tools
- Used template literals in node - full html pages sent in server response
    - Made a multi-page website without a single html file
- Met all criteria including accessibility

![happy office](https://media.giphy.com/media/5YTFe5djWgq0o/giphy.gif)

---

```javascript=1
function sharedContent(content, navButton) {
  return `<!DOCTYPE html>
  <head>
      <title>Microblog</title>
      <>...</>
  </head>
  <body>
      <header>
          <h1>Microblogger</h1>
          <nav>${navButton}</nav>
      </header>
      <main>
          ${content}
      </main>
      <script...></script>
  </body>
  </html>`;}
  
```

---


```javascript=1
function missing() {
  return sharedContent(`
  <article>
  <h2 class="error__title">Whoops</h2>
  <img src="https://media.giphy.com/media/Yl5aO3gdVfsQ0/giphy.gif" alt="error-image" class="error__image">
  <p class="error__text">Please feel free to go home.</p>`, `<a href="/" class="nav-button">Home</a>
  </article>`);
}
```

---

### What we struggled with

- writing tests for POST requests
- Git merges when livesharing
- Parsing URLSearchParams objects

![struggle](https://media.giphy.com/media/KQYhFclHvQFtC/giphy.gif)

---

#### URLSearchParams => Object
```javascript=
const blogPost = new URLSearchParams('name=Jim&title=Hello');
console.log(blogPost) 
// URLSearchParams { 'name' => 'Jim', 'title' => 'hello'}

const postObj = Object.fromEntries(blogPost); 
// { name: "Jim", title: "hello" }
```

---

### Questions?

![Questionsgiphy](https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif)

---

# SGC


## Stop
- 

## Go
- Review Estimates -> Actual
- Simple CSS asap, e.g. basic styling based on HTML template
- Exploring other people's approaches to solving a problem
- End liveshare sessions for git mergegg

## Continue
- Being awesome
- Jumping into rooms/checking in and asking questions
- using Miro and Jitsi as a group beforhand
- making clear issues to work within the parameters of
- Great code review

---

## minutes
### Go
#### Actuals
Gio - will be helpful to do this for future
Ivo - when we close issues

### Simple CSS
Jack: Make basic CSS right from the get go so at least it's usable if we don't have time
Everyone: Good idea

### Exploring other people's approaches
Jack: Interesting to see how other people would figure something out
Everyone: Good idea

### Liveshare merge conflicts
Ivo: Exit liveshare to avoid merge conflicts


## Continue
#### Being awesome
Ivo: We worked really well as a team this week.
Everyone: Yeah, great job everyone!

#### Jitsi and Miro
Chloe: Really helped our communication and be on the same page

#### Great code review

