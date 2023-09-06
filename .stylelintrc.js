module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-order',
    'stylelint-config-rational-order'
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'selector-class-pattern': null,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true
      }
    ],
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
