# mlgc-ts

## references that I found to develop this submission
- thanks gpt<3 uwuwuwuwuw
- https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln
- https://www.tensorflow.org/js/tutorials/setup
- https://medium.com/@Jesse_Reese/practical-uses-for-tensorflow-js-with-typescript-examples-7dd01d5c8698
- swagger.io
- https://github.com/search?q=typescriptexpressarchitecture&type=repositories
- https://github.com/expressjs/multer/issues/314
- https://github.com/oven-sh/bun/issues/5273
- https://bun.sh/guides/ecosystem/docker

## Docker
```docker build --pull -t mlgc-image .```
```docker run -d -p 5000:5000 mlgc-image```
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run ./src/index.ts
```

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
