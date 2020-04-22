# React, webpack

Full documentation about it [here](https://mochajs.org/#-require-module-r-module)

## Commands

- `npm run build` - run webpack using the local `webpack.config.js` file. Builds the client-side code into `/lib`.
- `npm start` - builds the code and opens `index.html` inside the browser.
- `npm test` - run the tests using the local `.mocharc.js` config file. As the config includes the Babel transpilation hook `@babel/register` it does not require pre-compilation before running.

## Makes use of

- [babel](https://babeljs.io/) - transpilation
- [react-testing-library](https://testing-library.com/) - React component testing library
- [chai](https://www.chaijs.com/api/assert/) - assertion library
- [jsx](https://reactjs.org/docs/introducing-jsx.html) - syntax extension to JavaScript
