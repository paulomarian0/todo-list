# Baixando a imagem do MongoDB no Docker:

```
docker run --name mongoapi -d -p 27017:27017 mongo:latest
```

#

# typescript-node-example

> Example Node.js app with TypeScript setup

## How to use

1. Git clone this repo
2. Run `npm install`

## Scripts

- `npm start`: start the prebuilt version of the app (use for production)
- `npm run start:dev`: start directly the TypeScript code for development, with debugger enabled
- `npm run prepublish`: compile TypeScript code, run automatically when `npm publish` or `npm pack` is called
- `npm run clean`: clean up compilation and package artifacts