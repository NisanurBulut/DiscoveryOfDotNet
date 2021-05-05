## Give a Star! :star:

If you like or are using this project to learn or start your solution, please give it a star. Thanks!
<hr>

# Discovery Of DotNet 
* .Net - Microsoft's Software Development Platform since 2001. (similar to Java Virtual Machine)
* Active Server Pages -Dynamic web pages, usually connected to a database.
* .Net is NOT a language.
* The .Net framework consists of runtime engine and libraris for executing programs written in a compliant language. 
* The .Net frameowrk is language neutral that supports more 20 languages that includes: C#, C++, VB, Java/J++, Fortran, ruby, Python...
* C# is the most popular programming language to write applications for the .Net framework.

#### Why Do We Need ASP.NET ?
* Starting 1997 there was a huge push away from fat client desktop applications and a migration toward browser based web applications.
* Asp.Net was Micsrosoft's answer in 2002 to Sun's maturing enterprise Java Platform.
* Asp.Net replaced the Classic ASP (Active Server Pages) technology.

#### A Daynamic ASP.NET
* An Asp.Net page is web page that contains mix of HTML markup and dynamic ASP markup.
* An Asp.Net is run on the server, combining the static HTML code, and updating the dynamic ASP elements to produce a final HTML page.

### Back End and Front end Options
* ASP.NET Core is Full Stack (Database, Business Logic, HTML)
* Can be combined with popular front-end services
	* React, Angular, Vue
	* Mobile apps
<img src="https://github.com/NisanurBulut/DiscoveryOfDotNet/blob/master/Assets/aspdotnetcore.png" />

### Without Dependency Injection
We have three pages. And we have some common functionality that we want to use across all the three pages like email and database access. Let's imagine that on all of these pages we need access to database first so what we will create database object on all the three pages and in our case we will call tha classes. Then we will have to the the same thing: Create object of the email implementation. So we have in all the three pages for the email class. <b>Now consider a scenario what happens if in future if we want to change the implementation of how we access the database or email ?</b><h2>The answer is dependency injection.</h2>
<img src="https://github.com/NisanurBulut/DiscoveryOfDotNet/blob/master/Assets/withoutdependencyinjection.png" /> 

### With Dependecy Injection
Our classes will be implementing those interface and we will register the interfaces in our depencency injection container as you can see in picture. We will tell dependency injection container that Iemail is an interface. When any page will need to access this functionalities it will just ask the dependency injection container to create object of this functionality and directly give us the object to use so inside the page. 
<img src="https://github.com/NisanurBulut/DiscoveryOfDotNet/blob/master/Assets/withdependencyinjection.png" /> 

### .Net Core Pipeline
The pipeline specifies how the applicaiton should response to http request. When our application receives a request from the browser, the request goes back and through the pipeline. In the pipeline we can add items that we want. Pipeline is made up of middlewares. Mvc is a middleware itself. so if we want an application to be built using mvc we need to add that middleware. Other examples could be authentication middleware, authorization middleware, session middleware, static files middleware and much more... So, what exactly happens is when our request will go throgh each middleware. It can get modified by them. and eventually it is either passed to the next middleware and if that is the last middleware in the pipeline the response is returned back to the server.
<img src="https://github.com/NisanurBulut/DiscoveryOfDotNet/blob/master/Assets/netcorepipeline.png" /> 

#### MVC (Model-View-Controller) 
* The MVC design pattern helps to enforce <b>seperation of concerns</b> to help you avoid mixing presentation logic, business logic, and data access logic together.
* MVC (Model-View-Controller) 
	Model: Manages the behavior and data
	View: Manages the display of data
	Controller: Handles page events and navigation between pages
<img src="https://github.com/NisanurBulut/DiscoveryOfDotNet/blob/master/Assets/mvc.png" />
<hr>

#### Database Setup
| Data Access Object (DAO)                      | Object Relational Mapper (ORM)                                                              |
|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| Manually create tables                        | Allow the computer to generate database tables based on classes defined in the application. |
| Traditional method of database access         | Auto connecting via connection string                                                       |
| Write your own SQL statements                 | Database is updated using migrations                                                        |
| Database manages (DBA's) useally prefer DAO's | Entity Framework is Microsoft's ORM                                                         |
| Provides more visibility on finding problems  | Simple for basic applications                                                               |
### 1. Starfighter
This working will show you how to :
- Use the MVC (Model View Controller) design pattern.
- Configure database tables using the Entity framework.
- Setup of classes as models. Customize Razor forms.
- Create methods inside a controller.
- Style an ASP.NET page with CSS.
- Use Bootstrap classes.
- Create a search function to filter database results.
