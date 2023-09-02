Eslint, prettier and husky setup for nodejs and express projects
---
# 1. Install Packages
You need to install eslint and some other config libs.

```
npm install @babel/eslint-parser eslint eslint-config-prettier eslint-plugin-prettier husky lint-staged prettier --save-dev
```

and also run ```npm install``` command to be on safe side and install other dependencies.

# 2. Configure ESLint
If you are lazy like me, just copy and paste the configuration into a file called .eslintrc or else you can run ```npx eslint --init``` command and set up .eslintrc file on your own with other exciting rules.

```
{
    "root": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "requireConfigFile": false
    },
    "extends": ["eslint:recommended", "prettier", "plugin:import/warnings"],
    "env": {
        "es2021": true,
        "browser": true,
        "node": true
    },
    "parser": "@babel/eslint-parser",
    "rules": {
        "semi": "off",
        "indent": ["error", 4],
        "prettier/prettier": 0,
        "object-curly-spacing": ["error", "always"],
        "no-console": "error",
        "no-unused-vars": "off",
        "no-underscore-dangle": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never"
            }
        ]
    }
}
```

# 3. Configure Prettier
Configuring Prettier is similar to ESlint, just add a .prettierrc.json file to your project root and you are good to go.

You can use the following configuration as a starting point:

```
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "singleQuote": true,
    "printWidth": 120
}
```

To check out all the available options, head over to the [Prettier Documentation](https://prettier.io/docs/en/options.html).

# 4. Configure Lint-staged
Lint-staged too is quite simple to configure. Just add the following to your package.json file and you are good to go:

```
// other configurations //
  "lint-staged": {
    "**/*.{js,jsx,json}": [
      "eslint . --fix",
      "prettier --write ."
    ]
  },
```

# 5. Configure Husky
We are at the last peg of our configuration journey. Configuring Husky is a bit trickier than the other configurations. Add the following script to your package.json file:
```
"scripts": {
    /* other scripts */
    "configure-husky": "npx husky install && npx husky add .husky/pre-commit \"npx --no-install lint-staged\""
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

Run the configure-husky script to install Husky and connect it to the pre-commit hook:
```
npm run configure-husky
```

You are now set!🎉🎉🎉🎉

In the following code in index.js file add console.log and try committing.
```
app.listen(port, () => {
//add the console log
console.log("log")
});
```


