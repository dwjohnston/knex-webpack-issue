This is a repro of a different issue. 

Here I'm using latest knex (0.95.15). 

Running the code directly, runs fine:

```
yarn 
yarn ts-node src/index.js
```


However, building and running the bundle errors 

```
yarn 
yarn build:dev
node src/main.js
```





```
MAC-DJOHNSTON:take3 djohnston$ node dist/main.js
webpack://my-webpack-project/./node_modules/util/util.js?:614
    throw new TypeError('The "original" argument must be of type Function');
    ^

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