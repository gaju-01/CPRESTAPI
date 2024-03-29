# CPRESTAPI
CPRESTAPI is a Java-based project showcasing a content management system for a blogging website developed using the Spring Framework and its associated projects. The website leverages key Spring modules including Spring Security, Spring Data, Spring Boot, and Hibernate/JPA for efficient CRUD (Create, Read, Update, Delete) operations, advanced queries, and robust backend/REST API architecture. Noteworthy features include OTP-based authentication for enhanced security and basic authorization mechanisms. The project serves as a practical demonstration of these technologies, offering insights into their seamless integration and functionality within a blogging platform.

# How to start the application
1. git clone [url]: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.
2. From the root of the project cd into SpringBoot.
3. Run the cmd mvn clean install. This cmd recreates the JAR file, that contains all the depencies, generated classes etc.
4. Run the cmd mvn spring-boot:run. This cmd executes the JAR file and hosts the application at the default port 8080.
5. Again from the root of the project cd into frontend npm start [-- args]: This runs a predefined command specified in the "start" property of a package's "scripts" object. If the "scripts" object does not define a "start" property, npm will run node server.js.Note that this is different from the default node behavior of running the file specified in a package's "main" attribute when evoking with node .As of npm@2.0.0, you can use custom arguments when executing scripts.

# Pre-Release/Prototype version: 
1. Check https://github.com/gaju-01/CPRESTAPI/releases/tag/0.0.0 to download the .zip and .tarz prototype/pre-release version of the application.
2. Check https://github.com/gaju-01/CPRESTAPI/releases/tag/0.0.1 to download the .zip and .tarz prototype/pre-release version of the application. In addtion to the previous release, this version contains fully functional profile section that an handle the image and profile data(i.e., profile picture) for multiple users efficiently.
