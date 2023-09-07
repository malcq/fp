module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'order/properties-order': [],
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-order': ['width', 'height'],
    'declaration-empty-line-before': [
      'always',
      {
        ignore: [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block'
        ]
      }
    ]
  }
};
