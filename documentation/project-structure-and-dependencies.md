# Project Structure and Dependencies

This project is a *single Git repo* consisting of two separately configured projects, each with their own dependencies.

Each directory has a *separate .gitignore file.*

The documentation directory is strictly informational and does not contain a project of its own.

## Frontend

The frontend directory contains an *Expo project* written primarily in React Native for mobile devices.

### Dependencies

#### Production

- React - Custom UI components with props, style, and state
- React Native - React for mobile devices
- Expo SecureStore - Secure local storage of credentials

#### Development

- Express - Routing and HTTP request handling

### Expo Setup

If App.js, app.json, index.js, package.json, and package-lock.json are present (as they should be), frontend configuration is straightforward.

In the command line from the frontend root:

```
npm install
```

Then, use .env.example as a guide to set environment variables in .env.

### Expo Setup from Scratch

Generally speaking, it is not viable to set up an Expo project from scratch as a configuration step for an already existing project. Creating a new Expo project overwrites existing files, including App.js and index.js, which should not be overwritten.

If, for some reason, app.json, package.json, and package-lock.json need to be recreated, they can be copied over from a new Expo project created in a *separate directory* to avoid overwriting.

In the command line from a *safe directory* not containing project files:

```
npx create-expo-app frontend --template blank
npx expo install expo-secure-store
```

Then, app.json, package.json, and package-lock.json can be copied to the project directory, and normal setup can be performed.

## Backend

The backend directory contains a *Node.js project* written primarily in JavaScript.

### Dependencies

#### Production

- dotenv - Environment variables accessible in code
- Express - Routing and HTTP request handling
- bcrypt - Password hashing
- pg - PostgreSQL database interface

#### Development

- cross-env - Command line environment variables across OS platforms
- Jest - JavaScript testing

### Node Setup

When package.json and package-lock.json are present (as they should be) backend configuration is straightforward.

In the command line from the backend root:

```
npm install
```

Then, use .env.example and env_example.ps1 as guides to set environment variables in .env and env.ps1, respectively.

### Node Setup from Scratch

If package.json and package-lock.json are missing, they can be recreated with the following steps.

#### Production

In the command line from the backend root:

```
npm init -y
npm install dotenv
npm install express
npm install bcrypt
npm install pg
```

In package.json:

```
"type": "module"
```

Then, use .env.example and env_example.ps1 as guides to set environment variables in .env and env.ps1, respectively.

#### Development

In addition to the production steps, do the following.

In the command line from the backend root:

```
npm install --save-dev cross-env
npm install --save-dev jest
```

In package.json:

```
"scripts": {
    "test": "cross-env NODE_ENV=test node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

---

[Back to README](../README.md)
