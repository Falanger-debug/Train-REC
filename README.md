# Train-REC
### Prerequisites 
1. Node.js  
  To check if Node.js is already installed on your system, run:
  ```
  node -v  
  ```
  If you need to install or manage Node.js versions more conveniently, it’s highly recommended to use NVM (Node Version Manager).
  - **NVM for Windows:**
  [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
  
  - **NVM for Mac/Linux:**
  [https://github.com/nvm-sh/nvm.git](https://github.com/nvm-sh/nvm.git)

  Once NVM is installed, you can easily install and use the desired Node.js version. For example:
  ```
  nvm install 22.12.0
  nvm use 22.12.0
  ```
  If you prefer not to use NVM, you can install Node.js manually from [https://nodejs.org](https://nodejs.org).
### Installation
1. Clone the repository:  
   Run the following commands to clone the repository and navigate to the project directory:
   ```
   git clone https://github.com/Falanger-debug/Train-REC.git
   cd Train-REC
   ```
2. Create .env file in Train-REC folder:  
   Inside the Train-REC folder, create an empty .env file. You don’t need to add anything to it, this is just to prevent errors during runtime.
3. Install dependencies:  
   Install all the required packages by running:
   ```
   npm install
   ```
4. Run the application:  
   Start the application using the following command:
   ```
   npm run dev
   ```
   Once the application is running, open your browser and visit:  
   [http://localhost:8080](http://localhost:8080)
   
