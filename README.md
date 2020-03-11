# React App Template 
![react-logo](https://miro.medium.com/max/256/1*gGh9I9ju9w4lXhmWoG2fXA.png)

## Step 1 - Project Initialization

Run `npm init` (with `-y` for no questions). This creates a `package.json` file.

## Step 2 - Code Quality

### [Prettier](https://github.com/prettier/prettier)

Install Prettier into your project with `npm install -D prettier`. `-D` means development, since we wouldn't want to push these kind of tools to production. After that, you can use the `prettier` command on any script, such as `prettier script.js`. This will output the _prettier_ version of the script. Alternatively, use the `--write` flag to write straight into the file. 

It can be frustrating to use `prettier` on every script within your project. An easier way would be to add a `format` script within your `package.json` as so (assuming your scripts are somewhere within the `src/` directory): 

    "scripts": {
        "format": "prettier --write \"src/**/*.{js,jsx}\"",
    },

This way, all you need to do is run `npm run format`.

### ESLint

On top of making sure your code is pretty, we have to make sure it follows some standard code styles. ESLint also has capabilities of formating code (like prettier), but prettier is much more powerful so we're not going to use it.

Run `npm install -D eslint esling-config-prettier`.

There are different types of configurations for ESLint, so we must create a `.eslint.js` file to explicity tell ESLint what we want.
Here's a basic and recommended one:

    module.exports = {
        extends: ["eslint:recommended", "prettier", "prettier/react"],
        plugins: [],
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: "module",
            ecmaFeatures: {
            jsx: true
            }
        },
        env: {
            es6: true,
            browser: true,
            node: true
        }
    }

After this, add a line in your `package.json` scripts to run `eslint` on your project:

"scripts": {
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
},

#### gitignore

SUPER IMPORTANT. You don't want sh*t in your GitHub Repositories. Add a `.gitignore` file! Some things that should go in there:

    node_modules
    .cache/
    dist/
    .env
    .DS_Store
    coverage/
    .vscode/

## React and ReactDOM

Install both of these packages- `npm install react react-dom`.

## Parcel

[Parcel](https://parceljs.org/) is a relatively new bundler for JavaScript projects with zero-config. Parcel accepts an entry point, and outputs a single, complete file with all of our code in it.

Install parcel with `npm install -D parcel-bundler`.

Inside of `package.json` scripts, add: `"dev": "parcel src/index.html"`. This sets the entry point to the file `src/index.html`.

Alternative bundlers are [webpack](https://webpack.js.org/) and [browserify](http://browserify.org/).

## ESLint & React
  
ESLint needs some help recognizing React without explicity using the word 'React' (since JSX gets translated to `React.createElement..`). Install these packages..

    npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react

Then, update your `.eslint.js` file for the new packages.

    module.exports = {
        extends: [
            "eslint:recommended",
            "plugin:import/errors",
            "plugin:react/recommended",
            "plugin:jsx-a11y/recommended",
            "prettier",
            "prettier/react"
        ],
        rules: {
            "react/prop-types": 0
        },
        plugins: ["react", "import", "jsx-a11y"],
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: "module",
            ecmaFeatures: {
                jsx: true
            }
        },
        env: {
            es6: true,
            browser: true,
            node: true
        },
        settings: {
            react: {
                version: "detect"
            }
        }
    }

- The import plugin helps ESLint catch commons bugs around imports, exports, and modules in general
- jsx-a11y catches many bugs around accessibility that can accidentally arise using React, like not having an alt attribute on an img tag.
- react is mostly common React things, like making sure you import React anywhere you use React.
- babel-lint allows ESLint to use the same transpiling library, Babel, that Parcel uses under the hood. Without it, ESLint can't understand JSX.
- eslint-plugin-react now requires you to inform of it what version of React you're using. We're telling it here to look at the package.json - to figure it out.

## Optional: Hooks

If you would like to use hooks in your React project, add it to ESLint with: `npm install -D eslint-plugin-react-hooks`. Then add the configs in `.eslint.js`:

    {
    "rules": {
        …,
        "react-hooks/rules-of-hooks": "error"
    },
    "plugins": [
        …,
        "react-hooks"
        ],
    }





