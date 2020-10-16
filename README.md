# Express Boilerplate

A boilerplate for Express backend server in TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need `node@^12` and `npm@^6` installed on your system.

If you want to use local MongoDB then you also need to MongoDB Server installed on your system.
See [these instructions](https://docs.mongodb.com/manual/administration/install-community/).

### Installing

A step by step series of examples that tell you how to get a development environment running.

Install all project dependency with `npm`:
```shell script
npm install
```

Then you need to create a `.env` file with some required variables:
```shell script
PORT=8000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/express
```
The default value of `PORT` is set to 8000.

Now, you can start the application with the predefined scripts:
```shell script
npm run dev
# OR
npm run start
```

## Running the tests

The unit tests can also be run from a predefined script:
```shell script
npm run test
```

## Coding style

The project uses `husky` for `git` hooks.
There are pre-commit hooks to run `eslint` and `prettier` on staged files.
There is a pre-push hook that runs the unit tests.
The configuration for this is present inside the `package.json` file.

## Deployment

While deploying the application, set the `NODE_ENV` variable in the `.env` file to `production`.

**Note:* If you want to use SSL for your server, you need to set `SSL_KEY_FILE` and `SSL_CERT_FILE` variables in the
`.env` file. These variables should contain paths to the SSL key and certificate files.*

The application can simply be deployed with the express server, or you can create a Docker image for deployment.

### Docker

There is a `Dockerfile` present in this project which can be used to create images that can be deployed in production.

To build a Docker image, run:
```shell script
docker build . -t <tag>
```

To run this Docker image, run:
```shell script
docker run -p 8000:8000 -d --env-file .env <tag>
```

## Built With

* [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
* [Express](https://expressjs.com/) - The web framework.
* [TypeScript](https://www.typescriptlang.org/) - The language used.
* [MongoDB](https://www.mongodb.com/) - Database provider.

## Authors

* **Surya Kant Bansal** - *Initial work* - [skb1129](https://github.com/skb1129)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* Inspiration from [TypeScript-Node-Starter](https://github.com/microsoft/TypeScript-Node-Starter).
