module.exports = (api) => {
  // Cache configuration is a required option
  api.cache(false);

  const presets = [
    [
      "@babel/preset-env", 
      { 
        useBuiltIns: false
      }
    ],
    "@babel/preset-react"
  ];

  const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-proposal-private-methods'],
    ['@babel/plugin-transform-runtime']
  ]

  return { presets, plugins };
};
