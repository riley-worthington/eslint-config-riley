module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'jsx-quotes': [1, 'prefer-single'],
    'no-console': 0,
    'no-nested-ternary': 'off',
    'quote-props': [1, 'consistent-as-needed'],
    'arrow-parens': [1, 'as-needed'],
    'jsx-a11y/label-has-associated-control': [
      1,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      1,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/jsx-wrap-multilines': [
      1,
      {
        declaration: false,
        assignment: false,
      },
    ],
    'comma-dangle': [
      1,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': [
      1,
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': 0,
  },
  globals: {
    cy: true,
    Cypress: true,
    newrelic: true,
  },
};
