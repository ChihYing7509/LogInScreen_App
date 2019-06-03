# Login-Screen Coding Challenge Introduction

##### Author : ChihYing Chang (Jill)
##### Date: Jun-2-2019

## 0. How to run the application


step 0. Clone files from Github 

step 1. Install Xcode

step 2. Install React Native (0.59.8) and react-native-cli (2.0.1) , please refer to [this document](https://facebook.github.io/react-native/docs/getting-started.html), and choose React Native CLI Quickstart. 

step 3. install Nodejs  (v10.8.0)

step 4. run frontend : 
Go to "Client" folder, open ".env" file, and change the value of "IP_Address" to your computer's IP address; then type the following commands.

```
npm install
react-native run-ios
```

Note: If there is an error as below when running ios app, 
```
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening Client.xcodeproj
```
Please just build the app with Xcode.app by opening Client.xcodeproj.

step 5. run backend : 
Go to "Server" folder, and type the following commands.

```
npm install
node server.js
```



## 1. Task:

 To create a login screen. It should be created using react native that authenticates the username and password against a Node JS API.

## 2. Functionality:

1. Auth Screen 
[Screen Shot](https://ibb.co/ns5jHDc )

This page is the entry page for users to log in their accounts.  
If users don't have an account yet, they can click the "Sign Up" to create an account.

2. CreateAnAccounr Screen
[Screen Shot](https://ibb.co/cDzKk4L )

This page shows the required information for a user to create an account. Once the account generates. It will return to the Auth Screen.

3. PrivateScreen 
[Screen Shot](https://ibb.co/TkDtkyv )

This page presents when users log in successfully. This private page becomes the entry page until the user clicks the log out button.



## 3. Technology Stack:

3.1 Frontend
- JavaScript ES6
- React
- React-Native
- AsyncStorage 
    
- [Axios](https://github.com/axios/axios)

3.2 Backend
- Node.js
- Express
    
- Mongoose
    
- [MongoDB.Atlas](https://www.mongodb.com/cloud/atlas/migrate?utm_medium=INT&utm_source=atlas-login&utm_campaign=migrations)
    
- [JWT](https://jwt.io/introduction/)
    
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
    
## 4. Database :

User dataset sample
```json
{"user": {"_id": "5cf4cbb11c9d440000001f7b", "email": "Jill@gmail.com", "password":  "$2b$12$jRa0TWq9VTiVxIX9YeYsEuppjvxEDwpzs8SC/wRYtoZtGKefWpXZe, "username": "Jill"}}
```

## 5. Demo :

[Login Screen App Demo](https://youtu.be/ELFKShNxKtU)

## 6. Reference :

1. A React Native UI Example
https://github.com/mmazzarolo/the-starter-app
2. Email validation
https://stackoverflow.com/questions/43676695/email-validation-react-native-returning-the-result-as-invalid-for-all-the-e
3. React-navigation
https://facebook.github.io/react-native/docs/navigation
4. React Native Navigation documentation
https://wix.github.io/react-native-navigation/#/
5. Promise based HTTP client for the browser and node.js
https://github.com/axios/axios
6. AsyncStorage
https://github.com/react-native-community/react-native-async-storage
7. React Native Authentication With Node.js and Express 
https://www.udemy.com/react-native-authentication-with-nodejs-and-express/
