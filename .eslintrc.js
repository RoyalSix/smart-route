module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use, default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0" // React version, default to the latest React stable release
        }
    },
    "rules": {
        "no-undefined": "warn",
        "react/no-find-dom-node": "warn",
        "semi": ["warn", "always", {"omitLastInOneLineBlock": true}],
        "no-console": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jquery": true
    },
    "globals": {
        "firebase": true
    }
}
