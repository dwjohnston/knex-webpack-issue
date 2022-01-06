Successful repro of the issue here. 


This is in Webpack 5, I get the same error. 


How this was created: 


1. `webpack init`
2. `yarn add knex@0.21.1`
3. Change tsconfig.json to make "moduleResolution": "node"
4. Update webpack to resolve all those no-longer-polyfilled libraries (Webpack 5 thing - https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-761853289)
5. Add '' To the module extensions. 


To see error: 

Run: 
```
yarn
yarn build:dev
node dist/main.js

```


You will see this error: 


```
MAC-DJOHNSTON:take2 djohnston$ node dist/main.js
webpack://my-webpack-project/./node_modules/knex/lib/dialects/_sync_^\.\/.*\/index\.js$?:4
	throw e;
	^

Error: Cannot find module './postgres/index.js'
    at webpackEmptyContext (webpack://my-webpack-project/./node_modules/knex/lib/dialects/_sync_^\.\/.*\/index\.js$?:2:10)
    at Knex (webpack://my-webpack-project/./node_modules/knex/lib/knex.js?:44:109)
    at eval (webpack://my-webpack-project/./src/index.ts?:13:64)
    at Object../src/index.ts (/Users/djohnston/git/knex-webpack-issue/take2/dist/main.js:3301:1)
    at __webpack_require__ (/Users/djohnston/git/knex-webpack-issue/take2/dist/main.js:3559:41)
    at /Users/djohnston/git/knex-webpack-issue/take2/dist/main.js:3635:37
    at Object.<anonymous> (/Users/djohnston/git/knex-webpack-issue/take2/dist/main.js:3637:12)
    at Module._compile (internal/modules/cjs/loader.js:1072:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1101:10)
    at Module.load (internal/modules/cjs/loader.js:937:32) {
  code: 'MODULE_NOT_FOUND'
}
```



