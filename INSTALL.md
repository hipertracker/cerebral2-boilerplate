Warning: this installation uses the latest master code of [Cerebral 2](https://cerebral.github.io/). It also uses [yarn](https://www.sitepoint.com/yarn-vs-npm/) instead of npm for the speed.

## Dowload the Cerebral 2 Boilerplate with monorepo as submodule

```
git clone --recursive https://github.com/hipertracker/cerebral2-boilerplate.git
```
## Compile local packages
```
cd cerebral2-boilerplate
yarn
```

## Compile `monorepo`
```
cd monorepo
yarn
yarn run setup
cd ..
```

## Add symlinks from monorepo to local node_modules
```
cd node_modules
ln -s ../monorepo/packages/cerebral* .
cd ..
```

## Run the server and open the browser
```
yarn start
open http://localhost:3000
```
