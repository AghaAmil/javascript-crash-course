## What is JavaScript Programming Language
JavaScript is a versatile, text-based programming language primarily used to make web pages interactive, but also used for server-side applications and other environments. It adds dynamic behavior and interactivity to websites, allowing for features like animations, form validation, and real-time updates, without requiring a full page reload.

### Here's a more detailed breakdown:
- **What it is:** JavaScript is a scripting language, meaning it's designed to be interpreted rather than compiled, and it's known for its dynamic and flexible nature. 
- **What it does:**
	- **Adds interactivity:** JavaScript allows web pages to respond to user actions, such as clicks, mouseovers, and form submissions.
	- **Updates content:** It can dynamically change the content, style, and structure of a web page without requiring a full page refresh.
	- **Handles data:** JavaScript can perform calculations, manipulate data, and validate user input. 
	- **Creates animations:** It can be used to create animations and other visual effects on web pages.

### Core Characteristics
- Originally designed to run in web browsers
- Dynamic typing and first-class functions
- Prototype-based object-oriented capabilities
- Event-driven programming model
- Single-threaded with asynchronous behavior

**Interpreted Language**
JavaScript code is executed line-by-line by the browser's JavaScript engine without requiring compilation beforehand. Modern engines use just-in-time compilation for performance optimization, but the code itself is still written as an interpreted language.

**Dynamic Typing**
Variables in JavaScript don't need explicit type declarations. A variable can hold different types of data during execution (string, number, object, etc.), and types are determined at runtime. This provides flexibility but requires careful programming to avoid type-related bugs.

**First-Class Functions**
Functions in JavaScript are treated as first-class citizens, meaning they can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned from functions
- Stored in data structures

**Prototype-Based Object-Oriented**
Unlike class-based OOP languages, JavaScript uses prototypes for inheritance. Objects can directly inherit properties and methods from other objects, creating prototype chains. (ES6 introduced class syntax, but it's syntactic sugar over the prototype system.)

**Event-Driven**
JavaScript in browsers responds to user actions (clicks, key presses, form submissions) through event listeners, making it reactive to user input and other events in the execution environment.

**Single-Threaded with Asynchronous Behavior**
JavaScript runs in a single thread (one operation at a time), but handles time-consuming operations like network requests asynchronously using callback functions, promises, and async/await syntax, preventing the application from freezing during these operations.

### Common Uses
- Creating interactive web elements (forms, animations, dynamic content)
- Front-end web development (often with frameworks like React, Angular, or Vue)
- Back-end development via Node.js
- Mobile app development (React Native, Ionic)
- Game development
- Desktop applications (Electron)

JavaScript works alongside HTML (structure) and CSS (styling) to create modern web experiences. It's one of the most widely-used programming languages in the world, essential for full-stack web development.

### Javascript for Software QA & Automation Engineers
JavaScript is a valuable tool for software test engineers and automation due to its widespread use in web development, ease of learning, and a rich ecosystem of testing frameworks, allowing for efficient automation of web application testing and integration with CI/CD processes. 

**Web Application Testing:**
JavaScript enables automation of web application testing, simulating user interactions and verifying functionality.

**Unit Testing:**
JavaScript allows testing individual components or functions of code, ensuring their correct behavior. 

**Integration Testing:**
It facilitates testing the interaction between different units or components of code. 

**End-to-End Testing (E2E):**
JavaScript can be used to test the entire application, including all components and dependencies, to ensure proper functionality. 

**Cross-Browser Testing:**
JavaScript testing frameworks can be used to run tests across multiple browsers, ensuring consistent performance and accurate testing data. 

**Asynchronous Testing:**
JavaScript's asynchronous nature is well-suited for testing applications that rely on asynchronous behavior. 

**CI/CD Integration:**
JavaScript tests can be easily integrated into continuous integration and continuous delivery (CI/CD) pipelines, automating the testing process during the build and deployment stages. 

**Frameworks:**
Numerous JavaScript testing frameworks, like Selenium, Cypress, and Jest, provide tools and structures for writing and running automated tests. 

**Test Automation Frameworks:**
Frameworks like Protractor and Puppeteer simplify the process of automating tests, making it easier to write and maintain test scripts. 

## Running JavaScript Code
Because of its wide range of applications, you can run JavaScript in several ways:
- Using console tab of web browsers
- Using Node.js
- By creating web pages

### Running JavaScript in Browser Console
To run JavaScript in your browser's console:
1. **Open the console**:
    - In Chrome/Edge/Firefox: Press F12 or right-click anywhere on a webpage and select "Inspect" or "Inspect Element"
    - On Mac: Press Command+Option+J (Chrome) or Command+Option+K (Firefox)
2. **Navigate to the Console tab**:
    - Click on "Console" in the developer tools panel that appears
3. **Type your JavaScript code**:
    - Simply enter JavaScript commands at the prompt (usually marked with a `>` symbol)
    - For example, type `console.log("Hello World!");` and press Enter
4. **Execute multi-line code**:
    - For longer scripts, press Shift+Enter to create new lines without executing
    - When finished, press Enter to run the entire script
5. **Access page elements**:
    - Use commands like `document.getElementById('elementId')` to interact with the current page

The console provides immediate feedback, showing return values or errors directly below your code, making it perfect for quick testing and debugging.

> [!NOTE] Note
> Other methods of running Javascript will be explained in the lecture.

## System Setup & Prepration
In this course, we will be executing JavaScript locally on your computer using Node.js. The process is summarized below: However, if you encounter any difficulties, please utilize AI-powered command prompts to seek assistance. I am confident that the process will be straightforward.

- Install [Node.js](https://nodejs.org/en)
- Install [git](https://git-scm.com)
- Install a text editor or an IDE ([VS Code](https://code.visualstudio.com) is recommended)

It is recommended to install below VS Code extensions. VS Code extensions are beneficial because they expand the editor's functionality, allowing you to add language support, debuggers, tools, and more, ultimately enhancing your development workflow and productivity

- HTML Boilerplate
-  HTML CSS Support
- JavaScript (ES6) code snippets
- Prettier - Code formatter
- Code Runner

[# How to use Prettier in VS Code](https://www.robinwieruch.de/how-to-use-prettier-vscode/)

## Project-Based Learning
In this course, you will be introduced to JavaScript Programming Language through a project-based approach. This approach involves creating a repository on GitHub, cloning it locally on our computer, reviewing the documentation thoroughly, practicing exercises, completing basic challenges, and subsequently committing and pushing your code back to the GitHub repository.

This guide will walk you through the essential steps to set up a GitHub repository for your JavaScript project, establish secure SSH access, and clone your repository to your local machine.

### 1. Creating a Repository in GitHub
1. **Sign in to GitHub** at [github.com](https://github.com/)
2. **Click the "+" icon** in the top-right corner of the page
3. **Select "New repository"** from the dropdown menu
4. **Fill in your repository details**:
   - Repository name (use a descriptive name for your JavaScript project)
   - Description (optional but recommended)
   - Choose between public or private visibility
   - Select "Add a README file" to initialize your repository with a README
   - Choose appropriate .gitignore template (select "Node" for JavaScript projects)
   - Select a license if desired
5. **Click "Create repository"**

Your new repository is now created and ready to use!

### 2. Generating a New SSH Key
SSH keys provide a secure way to connect to GitHub without entering your username and password each time.

#### For Windows (using Git Bash)
1. **Open Git Bash**
2. **Generate a new SSH key** by running:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   (Replace with your GitHub email address)
3. **When prompted to "Enter a file in which to save the key," press Enter** to accept the default location
4. **Enter a secure passphrase** when prompted (recommended, but you can leave it empty by pressing Enter)
5. **Start the SSH agent** in the background:
   ```bash
   eval "$(ssh-agent -s)"
   ```
6. **Add your SSH key to the agent**:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

#### For macOS/Linux
1. **Open Terminal**
2. **Generate a new SSH key** by running:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   (Replace with your GitHub email address)
3. **When prompted to "Enter a file in which to save the key," press Enter** to accept the default location
4. **Enter a secure passphrase** when prompted (recommended, but you can leave it empty by pressing Enter)
5. **Start the SSH agent** in the background:
   ```bash
   eval "$(ssh-agent -s)"
   ```
6. **Add your SSH key to the agent**:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

### 3. Adding Your SSH Key to GitHub
1. **Copy your SSH public key to the clipboard**:
   **For Windows (Git Bash)**:
   ```bash
   cat ~/.ssh/id_ed25519.pub | clip
   ```
   **For macOS**:
   ```bash
   pbcopy < ~/.ssh/id_ed25519.pub
   ```
   **For Linux**:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   (Then manually copy the output)

2. **Go to GitHub** and sign in to your account
3. **Click your profile photo** in the top-right corner
4. **Select "Settings"** from the dropdown menu
5. **Click "SSH and GPG keys"** in the left sidebar
6. **Click "New SSH key"** or "Add SSH key"
7. **Add a descriptive title** for your key (e.g., "Work Laptop" or "Personal MacBook")
8. **Paste your key** into the "Key" field
9. **Click "Add SSH key"** to save

### 4. Cloning Your Repository to Your Local Machine
Now that you've set up SSH access, you can clone your repository to start working locally:
1. **Navigate to your repository** on GitHub
2. **Click the "Code" button** (green button)
3. **Select "SSH"** in the dropdown
4. **Copy the SSH URL** provided (it should look like `git@github.com:username/repository-name.git`)
5. **Open your terminal or Git Bash**
6. **Navigate to the directory** where you want to store your project:
   ```bash
   cd /path/to/your/projects/folder
   ```
7. **Clone the repository** using:
   ```bash
   git clone git@github.com:username/repository-name.git
   ```
   (Replace with your actual repository URL)
8. **Navigate into your project directory**:
   ```bash
   cd repository-name
   ```

Congratulations! You now have a GitHub repository set up with secure SSH access and a local copy ready for development. You can now start building your JavaScript project with version control.