var showAbout = function() {
  document.getElementById("info").innerHTML = 
  "<p>As a lover of modernist architecture, I quote the great American architect, Louis Sullivan. He famously coined the simple, eloquent phrase, 'form follows function.' And while websites could not have been dreamt of at the turn of the 20th century, I believe today this timeless principle applies to web applications as well.</p><p>If you visit a website which is cluttered, unorganized and an assualt on the senses, the less likely you are to want to spend time on it. As a web developer, my focus initailly was solely on user interface and appearance. I quickly realized that a website's user experience and navigability are just as important and directly related to it's appearance and feel.</p><p>Today, creating both together through functional, modern, minimalist design has become my focus and my passion.</p>";
 
};

var showContact = function() {
  document.getElementById("info").innerHTML = 
  "<p>I would love to hear from you.</p> <p>I invite you to reach out via email or LinkedIn, both listed below.</p> <p>I look forward to hearing from you.</p> <a id='linkedin' href='https://www.linkedin.com/in/erin-hubbard/'>LINKEDIN<span class='gold'> | </span></a><a id='email' href='mailto: erinhubbard1981@gmail.com' target='_top'> erinhubbard1981@gmail.com</a>";
};

var showProjects = function() {
  document.getElementById("info").innerHTML = 
    "<p onclick='showCook()'>Cook-Or-Naught</p> <p onclick='showCatalog()'>Cart Catalog</p> <p id='works'>In the Works...</p> <p onclick='showMongo()'>Mongo Home Makeover</p>  <p onclick='showPark()'>Park-It-4Ward</p>"
  // <br><br> <a id='mongo' href='https://mongo-home-makeover.herokuapp.com/'>MONGO HOME MAKEOVER</a><br><br>  <a id='cart' href='http://project3web-prod.us-west-2.elasticbeanstalk.com/'>CART CATALOG</a><br><br>      <a id='park' href='https://ehubbz.github.io/Project1/'>PARK-IT-4WARD</a>";
};

var showCook = function() {
  document.getElementById("info").innerHTML =
    "<p onclick='showCook()'>Cook-Or-Naught</p><p>Cook-or-Naught is a multi-functional website application that allows the user to seach for recipes and restaurants all in the same application. The user can search for specific recipes or ingredients and can save them to a database for reference later(if they are signed in). They can also click 'I'm Feeling Lucky' and the site will generate a random recipe.If the user decides they no longer want to cook and would rather go out to eat they can seach and get directions to local restaurants that serve a particular cuisine.</p><p>Functionality achieved through: CSS, Bootstrap, Bootswatch, JavaScript, jQuery, Firebase, google maps api, recipes api, user authentication</p><p>Click below to see it in action.</p><a id='cook' href='https://ehubbz.github.io/Project1/'>COOK-OR-NAUGHT</a>";
};

var showMongo = function () {
  document.getElementById("info").innerHTML =
    "<p onclick='showMongo()'>Mongo Home Makeover</p> <p>Mongo Home Makeover is a data-scraping app that pulls in articles from https://www.Domino.com featuring headlines for before and after photos to give the user inspiration for their home makeover projects. The user can save the articles they like and leave comments on each article so that they can refer to them later.</p> <p>Functionality achieved through: CSS, Bootstrap, Bootswatch, JavaScript, jQuery, Handlebars, Express, Axios, Cheerio, MongoDB, mongoose, body-parser, MVC model, node.</p><p>Click below to see it in action.</p><a id='mongo' href='https://mongo-home-makeover.herokuapp.com/'>MONGO HOME MAKEOVER</a>";
};

var showCatalog = function () {
  document.getElementById("info").innerHTML =
    "<p onclick='showCatalog()'>Cart Catalog</p> <p>Cart Catalog is every vintage video gamer's dream. With its retro arcade feel, this app lets the user(if logged in) search igdb.api for the games they own so they can digitally track their collection online. The api allows users to filter their search by release and platform. Additionally, the user can find the real time estimated value of their game using the ebay api, thus allowing the user to estimate the value of their collection. This app also lets the user join in the forum discussion platforms on various topics.</p> <p>Functionality achieved through: CSS, AnimateCSS, Bootstrap, JavaScript, jQuery, Moment.JS, SQL, Sequelize, ebay.api, igbd.api, Gulp task manager, ASP.NET, full C# backend configuration, anti-forgery user authentication </p><p>Click below to see it in action.</p><a id='cart' href='http://project3web-prod.us-west-2.elasticbeanstalk.com/'>Cart Catalog</a>";
};

var showPark = function () {
  document.getElementById("info").innerHTML =
    "<p onclick='showPark()'>Park-It-4Ward</p> <p>Park-It-4ward is where 'Pay it forWward and parking meet. The goal is to serve as as a parking time-share of sorts. For example, you pay $9 to park for 12 hours, but you only need to park for 3 hours. Then someone else comes along and only needs to park for 2 hours but they also have to pay $9. This app lets users know what spaces have been paid for by initial drivers and how much time is left for the origional 12 hours. The user has the option of parking in that space for free or paying for a spot that will later help someone else. Sometimes you pay, sometimes you get the freebie.<br><br> Future developments include a system for users to contribute money to origional payor or running of the app, as well as a messaging feature that would allow users to let other users share info like, 'Hey, spot 19 will be free in 45 mins.'  </p> <p>Functionality achieved through: CSS, AnimateCSS, Bootstrap, JavaScript, jQuery, mySQL, Sequelize google maps api, Moment.JS </p><p>Click below to see it in action.</p><a id='park' href='https://parkit-4ward.herokuapp.com/'>Park-It-4Ward</a>";
};