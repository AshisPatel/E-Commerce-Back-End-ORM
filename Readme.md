<h1>Ecommerce Back End (ORM)</h1>
  <image src='https://img.shields.io/badge/license-MIT-green.svg' />
  <h2>Description</h2>
  
  This project is a representation of how the back end portion of an ecommerce website would function utilizing the Object Relational Mapping (ORM) library, Sequelize, in Node.js. The application utilizes express.js as well to create a server. The server can be sent requests at the given routes to perform CRUD operations regarding cateogires, products, and tags. These three items are references to models that were created in Sequelize that represent tables in the MySql database that is being interacted with using Sequelize. 

  <h2>Functionality</h2>

This project heavily utilizes both Express.js and Sequelize in the Node.js to create a functional back end for an ecommerce platform that stores its information in a MySql database. Additionally, the project utilizes the dotenv package to read environment variables from a local .env file in the directory when connecting to MySql via Sequelize. These environment variables allow us to keep information like the user's MySql username and password private. Express.js is used to create a server and its Router functionality is used to create routes to the perform CRUD operations on the models, which we will be discussing in the next paragraph.

There are four models that are present in the models directory: Category, Product, ProductTag, and Tag. There are only associations for the Category, Product, and Tag models. The Category model is associated with the Product model in a one-to-many relationship. One category can have many products, however a product may only be associated with one category. The Product and Tag models have a many-to-many relationship. A product can have multiple tags and a tag may belong to multiple products. These two models however are associated through the ProductTag model. The ProductTag model contains two foreign keys, the tag_id and product_id, which reference the primary key 'id' in the Tag and Product model. This allows us to reference the Product and Tag models when performing requests on either models (in the routes directory) through the assocation we created for Sequelize. 

The CRUD operations were all created in the routes directory for interactions with each model. The Sequelize .create method is utilized for all .post routes, the .findAll or .findOne method is utilized to grab either all information from a model or a specific model based in the requested parameter, the .update method is used for all put requests, and the .destroy method is utilized for all delete requests. 

  <h2>Table of Contents</h2>
 <ul>
  <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    
  <li><a href="#questions">Questions</a></li>
 </ul>

  <h2 id="installation">Installation</h2>
  <ol>
    <li>Install node.js and MySql for your operating system. (MySql and Node.js may need additional configuration upon installation depending on your OS)</li> 
    <li>Clone or download the contents of this project's repo onto your local machine. </li> 
    <li>Navigate to the cloned directory via your terminal.</li> 
    <li>Run 'npm -install' to download the required dependencies. </li> 
    <li>Create a .env file and use the dotenv package to utilize the environment variables in the config/connection.js file. (These will be used to connect to MySql and help keep your information private)</li> 
    <li>Connect to the MySql shell in your terminal and run the schema.sql file in the db directory. </li> 
    <li>Run the 'show schemas' command in the MySql shell and verify the creation of the 'ecommerce_db' schema.</li> 
    <li>Exit out of the MySql shell.</li> 
    <li>In the terminal, use the 'npm run seed' command to seed the tables. </li> 
    <li>Verify that the 'force' key is set to 'false' in the server.js sequelize.sync method in the server.js file. </li> 
    <li>Run the 'npm start' command to start the server.</li> 
    <li>Use a route testing software like Insomnia to verify that the CRUD routes work. </li> 
    
  </ol>
  

  <h2 id="usage">Usage</h2>
  <p>Checkout the link below to view the walkthrough video that show cases how to start and test the Ecommerce Back End project!</p>

  [Click here to view the walkthrough video](https://drive.google.com/file/d/1AK0pBXwlD3afRBamHE38hmZvRHEuLK8w/view)
  
 
  
  <h2 id="license">License</h2>

  MIT - Find out more about this project's license(s) at: [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)

  
  <h2 id="questions">Questions</h2>
  
  <p> 
  Made by: AshisPatel<br />
  Github Profile: https://github.com/AshisPatel<br />
  </p>Email: ashis.n.patel@gmail.com<br />
  
  <h2>End Note - A Thank You to the Reader</h2>

  Thank you for taking the time to visit my repo and read through the Readme! I hope you're having a good day, but if not maybe the included fun fact and gif from my random collection of things that make me laugh will give you a boost! At the least, I hope they give you something fun to share with a friend. 😄 

  Prior to getting to the fun stuff, let me rant about this project! Sequelize's syntax was originally foreign and choppy but with some analysis, things like the many-to-many relationship are clear. Or I suppose, the syntax is a step-up from MySql (at least in my opinion), regardless I can apprecaite keeping everything in Javascript. However, with all of these tools at my disposal I feel as if I can make my own web app from scratch, front-to-back! So keep an eye out on my repo and I'll have my own project going with daily (small perhaps, depending on the day) updates! I'm really mentioning this for some sense of partial accountibility. Anyway, thank you for reading, please enjoy the fun content and have a great rest of your day! 😁

  **Fun fact:** Did you know that Scotland's national animal is the unicorn? The unicorn has been a Scottish symbol since the 12th century, when it was used on the coat of arms by William I.


  ![Animated panda discus tosses a person](https://github.com/AshisPatel/E-Commerce-Back-End-ORM/blob/main/gifs/panda.gif)





  