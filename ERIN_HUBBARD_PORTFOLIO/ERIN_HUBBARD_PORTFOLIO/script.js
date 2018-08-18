var showAbout = function() {
  document.getElementById("info").innerHTML =
    "<p>As a lover of modernist architecture, I quote the great American architect, Louis Sullivan. He famously coined the simple, eloquent phrase, 'form follows function.' And while websites could not have been dreamt of at the turn of the 20th century, I believe today this timeless principle applies to web development as well which is why I follow this philosophy each time I build an application.</p><p>As a Charlotte, NC native, I have a special appreciation for the Queen City. I have seen it change and grow, becoming more and more of a tech driven city. And with all of my wonderful family nearby, this will always be my home.</p> <p>I've spent the past 14 years in the healthcare field as a Physical Therapist Assistant both in the hospital and skilled nursing settings. I have learned so much over the years, worked in some challenging situations and had to get creative to get the job done, met so many people, and or course, heard some amazing stories, with Part of that time being spent as a rehab department manager.</p><p>However, I began to crave a new type of challenge, to use my brain and creativity in an different way, and experience a new way to reach and help people. I had achieved my personal goals with that career and was ready to apply the drive, accomplishment, dedication and confidence I had enjoyed as a Physical Therapist Assisant to another realm. I realized it was time for the next chapter.</p><p>When I became a developer, I felt that creative spark again. I was challenged again. I was driven again! I am someone who wants to be proud of my job, my work, and impact on others each day. Being a web developer has given me the desire to excell again.</p> <p>Fianlly, I have overcome a lot of obstacles and challenges to get where I am, and I know I will meet more, but I know I can overcome those too. That's how you change, how you grow.</p><p>If it doesn't challenge you, it doesn't change you.</p>";
};

var showContact = function() {
  document.getElementById("info").innerHTML =
    "<p>I would love to hear from you.</p> <p>I invite you to reach out via email or LinkedIn, both listed below.</p> <p>I look forward to hearing from you.</p> <a id='linkedin' href='https://www.linkedin.com/in/erin-hubbard/'>LINKEDIN<span class='gold'> | </span></a><a id='email' href='mailto: erinhubbard1981@gmail.com' target='_top'> erinhubbard1981@gmail.com</a>";
};

var showProjects = function() {
  document.getElementById("info").innerHTML =
    "<p class='names' onclick='showCook()'>Cook-Or-Naught</p> <p class='names' onclick='showTrain()'>Train Scheduler</p> <p class='names' onclick='showGif()'>GifTastic</p>  <p id='works'>In the Works...</p> <p class='names' onclick='showMongo()'>Mongo Home Makeover</p> <p class='names' onclick='showReact()'>React To-do App</p> ";
  // <br><br> <a id='mongo' href='https://mongo-home-makeover.herokuapp.com/'>MONGO HOME MAKEOVER</a><br><br>  <a id='cart' href='http://project3web-prod.us-west-2.elasticbeanstalk.com/'>CART CATALOG</a><br><br>      <a id='park' href='https://ehubbz.github.io/Project1/'>PARK-IT-4WARD</a>";
};

var showCook = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showCook()'>Cook-Or-Naught</p><p>Cook-or-Naught is a multi-functional website application that allows the user to seach for recipes and restaurants all in the same application. The user can search for specific recipes or ingredients and can save them to a database for reference later(if they are signed in). They can also click 'I'm Feeling Lucky' and the site will generate a random recipe.If the user decides they no longer want to cook and would rather go out to eat they can seach and get directions to local restaurants that serve a particular cuisine.</p><p>Functionality achieved through: CSS, Bootstrap, Bootswatch, JavaScript, jQuery, Firebase, google maps api, recipes api, user authentication</p><p>Click below to see it in action.</p><a target='_blank' id='cook' href='https://ehubbz.github.io/Project1/'>COOK-OR-NAUGHT</a>";
};

var showMongo = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showMongo()'>Mongo Home Makeover</p> <p>Mongo Home Makeover is a data-scraping app that pulls in articles from https://www.Domino.com featuring headlines for before and after photos to give the user inspiration for their home makeover projects. The user can save the articles they like and leave comments on each article so that they can refer to them later.</p> <p>Functionality achieved through: CSS, Bootstrap, Bootswatch, JavaScript, jQuery, Handlebars, Express, Axios, Cheerio, MongoDB, mongoose, body-parser, MVC model, node.</p><p>Click below to see it in action.</p><a target='_blank' id='mongo' href='https://mongo-home-makeover.herokuapp.com/'>MONGO HOME MAKEOVER</a>";
};

var showGif = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showGif()'>GifTastic</p> <p>GifTasic is a fun app that lets the user search for gifs of their favoriteband or musician. The app utillizes an api call to search for gifs based on the user's input. The limit of returns is set to 10, so 10 gifs of the user's search are returned and populate on the page. The user can search as many as bands as he or she wants, and all the results will continue to prepend their exising list of gifs. The gifs are initially static, cliking on the image will start the gif, clicking it again will stop the gif from playing. Try it, it's fun!!! <p>Click below to see it in action.</p></p> <p>Functionality achived through CSS, Bootstrap, Node.js, express</p><a target='_blank' id='gif' href='https://ehubbz.github.io/GifTastic/'>GifTastic</a>";
};

var showReact = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showReact()'>React To-Do App</p> <p>I am presenting this app in a video demo as it is currently still in progress.</p> <p>In this to-do app, the user can enter a task title and description to add to their list, toggle between completed and not completed by clicking the task to add/remove a line thru, edit and save the edited task, cancel editing mode, and delete the task from the list. There is also a button in the works for the user to click to remind them in a certain length of time to complete it, which for demonstration purposes is set for 5 seconds. This function is not yet completed (as you can see by the [object: object] in the alert).</p> <p>Additional functionality includes but is not limited to: allowing the user to set a specific time/date for the reminder versus the hard-coded 5 seconds currently and backend storage for the user's information to persist.</p> <p>Functionality achived through React.js, CSS, Bootstrap, Lodash, Node.js</p> <p>Click below to see it in action.</p> <a target='_blank' id='react' href='https://youtu.be/rv0-BWDEMm0'>React To-Do App</a>";
};

var showTrain = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showTrain()'>Train Scheduler</p> <p>Train Scheduler utlizes Moment.js to assist on calculating each train's schedule for the user. The app takes in each train's name, destination, frequency and time of first arrival. Using Moment.js, the time of the train's next arrival as well as how many minutes away the next arrival is, are calulated and popluated in the table for easy user readability.</p><p>Functionality achived through CSS, Bootstrap, Node.js, express, Moment.js</p> <p>Click below to see it in action.</p> <a target='_blank' id='train' href='https://ehubbz.github.io/Train-Scheduler/'>Train Scheduler</a>";
};
