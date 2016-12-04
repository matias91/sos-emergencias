module.exports = {
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React", // Pragma to use, default to "React"
            "version": "15.0"
        }
    },
    "ecmaFeatures": {
        "modules": true,
        "jsx": true
    },
    "env": {
        "es6": true,
        'commonjs': true,
        'browser': true,
        'mocha': true
    },
    "rules": {
        //More rules in: http://eslint.org/docs/rules/
        "no-undef": 2,
        "no-unused-vars": [2, {"args": "after-used"}],
        "no-use-before-define": 1,
        "no-cond-assign": 2,
        "no-console": 1,
        "no-debugger": 2,
        //"no-extra-parens": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-unreachable": 2,
        "jsx-quotes": 1,

        //React rules
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-handler-names": 1,
        "react/jsx-indent-props": 1,
        "react/jsx-indent": [1, 4],
        "react/jsx-key": 1,
        //"react/jsx-max-props-per-line": 1,
        "react/jsx-no-bind": 1,
        "react/jsx-no-duplicate-props": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 1,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 1,
        "react/no-direct-mutation-state": 1,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        //"react/no-set-state": 1,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/wrap-multilines": 1
    },
    "globals": {
        'require': false,
        'process': false,
        '__ENVIRONMENT__': false
    }
};
