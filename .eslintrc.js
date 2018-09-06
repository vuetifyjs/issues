module.exports = {
  root: true,

  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  env: {
    node: true,
    browser: true
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],

  plugins: [
    'typescript'
  ],

  rules: {
    'vue/max-attributes-per-line': [2, {
      singleline: 5,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'prefer-promise-reject-errors': 0,
    'arrow-parens': [2, 'as-needed'],
    'max-len': [
      2,
      140,
      4,
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
    'max-statements': [2, 24],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 0,
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: false
    }],
    'no-empty': 'error',
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'no-return-await': 'warn',
    'object-shorthand': ['error', 'always'],
    'no-extra-semi': 'error',
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }],

    'vue/name-property-casing': false,
    'vue/require-default-prop': false,
    'vue/require-prop-types': false,
    'vue/prop-name-casing': 'error'
  },

  overrides: [
    {
      files: '**/*.vue',
      rules: {
        indent: false,
        'vue/script-indent': ['error', 2, {
          'baseIndent': 1,
          'switchCase': 1,
          'ignores': []
        }],
        'vue/html-closing-bracket-newline': ['error', {
          'singleline': 'never',
          'multiline': 'always'
        }],
        'vue/html-closing-bracket-spacing': 'error'
      }
    },
    {
      files: '**/*.ts',
      rules: {
        // https://github.com/eslint/typescript-eslint-parser/issues/416
        'no-undef': 'off',

        // https://github.com/eslint/eslint/issues/10260
        'space-infix-ops': 'off',

        // https://github.com/nzakas/eslint-plugin-typescript/issues/127
        // 'typescript/prefer-namespace-keyword': 'error',

        // Can't overload function exports with this enabled
        'import/export': 'off',

        // https://github.com/eslint/typescript-eslint-parser/issues/445
        // https://github.com/eslint/typescript-eslint-parser/issues/457
        // enabled in tslint instead
        'no-unused-vars': 'off',
        // 'typescript/no-unused-vars': 'error',

        // https://github.com/eslint/typescript-eslint-parser/issues/443
        // 'no-redeclare': false,

        'typescript/adjacent-overload-signatures': 'error',
        'typescript/member-delimiter-style': ['error', {
          delimiter: 'none'
        }],
        'typescript/member-ordering': 'error',
        'typescript/type-annotation-spacing': 'error'
      }
    }
  ]
}
