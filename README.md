# my-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### If you got digital-envelope-routines unsupported error, replace following scripts

"scripts": {
"serve": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
"build": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
"lint": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
},

Then

```
npm update
```
