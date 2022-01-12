# knex-webpack-issue
Reproducing an issue I'm having with knex and webpack. 


**Take 1** - Abandoned. Nothing to see here. 


**Take 2** - Reproduces this error: 

```
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


**Take 3** - Reproduces this error: 


```
TypeError: The "original" argument must be of type Function
    at promisify (webpack://my-webpack-project/./node_modules/util/util.js?:614:11)
    at eval (webpack://my-webpack-project/./node_modules/knex/lib/migrations/util/fs.js?:8:14)
    at Object../node_modules/knex/lib/migrations/util/fs.js (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:481:1)
    at __webpack_require__ (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:3669:41)
    at eval (webpack://my-webpack-project/./node_modules/knex/lib/migrations/util/template.js?:3:33)
    at Object../node_modules/knex/lib/migrations/util/template.js (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:511:1)
    at __webpack_require__ (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:3669:41)
    at eval (webpack://my-webpack-project/./node_modules/knex/lib/migrations/migrate/MigrationGenerator.js?:3:38)
    at Object../node_modules/knex/lib/migrations/migrate/MigrationGenerator.js (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:401:1)
    at __webpack_require__ (/Users/djohnston/git/knex-webpack-issue/take3/dist/main.js:3669:41)
```





**Take 2 Solved**

Solves take2. 


