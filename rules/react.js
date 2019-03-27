module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    "jsx-quotes": ["error", "prefer-double"],

    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }
    ],

    "react/display-name": ["off", { ignoreTranspilerName: false }],

    "react/forbid-prop-types": [
      "error",
      { forbid: ["any", "array", "object"] }
    ],

    "react/jsx-boolean-value": ["error", "never"],

    "react/jsx-closing-bracket-location": ["error", "line-aligned"],

    "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

    "react/jsx-handler-names": [
      "off",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on"
      }
    ],

    "react/jsx-indent-props": ["error", 2],

    "react/jsx-key": "off",

    "react/jsx-max-props-per-line": ["off", { maximum: 1, when: "multiline" }],

    "react/jsx-no-bind": [
      "error",
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false
      }
    ],

    "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],

    "react/jsx-no-literals": "off",

    "react/jsx-no-undef": "error",

    "react/jsx-pascal-case": [
      "error",
      {
        allowAllCaps: true,
        ignore: []
      }
    ],

    "react/sort-prop-types": [
      "off",
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false
      }
    ],

    "react/jsx-sort-props": [
      "off",
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false
      }
    ],

    "react/jsx-uses-react": ["error"],

    "react/jsx-uses-vars": "error",

    "react/no-danger": "warn",

    "react/no-deprecated": ["error"],

    "react/no-did-mount-set-state": ["error"],

    "react/no-did-update-set-state": ["error"],

    "react/no-direct-mutation-state": "off",

    "react/no-is-mounted": "error",

    "react/no-multi-comp": ["error", { ignoreStateless: true }],

    "react/no-set-state": "off",

    "react/no-string-refs": "error",

    "react/no-unknown-property": "error",

    "react/prefer-es6-class": ["error", "always"],

    "react/prefer-stateless-function": "error",

    "react/prop-types": [
      "error",
      { ignore: ["children"], customValidators: [], skipUndeclared: false }
    ],

    "react/react-in-jsx-scope": "error",

    "react/require-extension": ["off", { extensions: [".jsx", ".js"] }],

    "react/require-render-return": "error",

    "react/self-closing-comp": "error",

    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never"
      }
    ],

    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: true,
        assignment: true,
        return: true
      }
    ],

    "react/wrap-multilines": "off", // deprecated version

    "react/jsx-first-prop-new-line": ["error", "multiline"],

    "react/jsx-equals-spacing": ["error", "never"],

    "react/jsx-indent": ["error", 2],

    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],

    "react/jsx-no-comment-textnodes": "error",

    "react/no-comment-textnodes": "off", // deprecated version

    "react/no-render-return-value": "error",

    "react/require-optimization": ["off", { allowDecorators: [] }],

    // warn against using findDOMNode()
    "react/no-find-dom-node": "error",

    // Forbid certain props on Components
    "react/forbid-component-props": ["off", { forbid: [] }],

    // Prevent unused propType definitions
    "react/no-unused-prop-types": [
      "error",
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],

    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": "error",

    // Validate whitespace in and around the JSX opening and closing brackets
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never"
      }
    ],

    // Prevent usage of Array index in keys
    "react/no-array-index-key": "off",

    // Enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props": "off"
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"]
      }
    },
    react: {
      pragma: "React",
      version: "16.0"
    }
  }
};
