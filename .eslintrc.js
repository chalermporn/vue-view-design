module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: ['/^router-/', '/^i-/']
    }],
    indent: ['error', 2, {
      VariableDeclarator: 1
    }],
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/html-indent': ['error', 2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never'
    }],
    // 'vue/html-closing-bracket-spacing': 'error',
    // 'vue/html-end-tags': 'error',
    // 'vue/html-self-closing':[0],
    // 'vue/html-self-closing': ['error', {
    //   'html': {
    //     'void': 'never',
    //     'normal': 'always',
    //     'component': 'any'
    //   },
    //   'svg': 'always',
    //   'math': 'always'
    // }],
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: {
        max: 7,
        allowFirstLine: true
      }
    }],
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-template-shadow': 'off',
    'vue/prop-name-casing': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',

    // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    // 'vue/attributes-order': 'off',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // 'vue/this-in-template': [2, 0],
    'brace-style': 'off',
    eqeqeq: 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
