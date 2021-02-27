# basic-rest-api

This Micro service API is created using serverless framework on AWS to demonstrate CURD operations of a basic Rest API.

## Prerequisites

- Node 12
- npm 6
- serverless
- aws (aws - cli)

## Initialising
Add dependencies / dev-dependencies as needed

```bash
npm install <package-name>
```
```bash
npm install <package-name> --save-dev
```

 Install/download the dependencies

```bash
npm install
```

Run locally using [serverless offline](https://github.com/dherault/serverless-offline). Thanks to [David Hérault](https://github.com/dherault)

```bash
npm start
```

## Develop / Debug

Start API command

```bash
npx serverless offline
```

### Individual functions

```bash
npx serverless invoke local --function functionName <stringified event>
```
## Unit Test
Execute tests as below 
```bash
npm run test
```
## API Documentation

[OpenAPI Swagger Description](docs/api.yml)

## Manage Plugins

Add plugins like below:

```bash
npx serverless plugin install --name <plugin-name>
```

## Deploy
 Deploy to AWS as below.
```bash
sls delploy
```

## TODO:

- [x] Add Sample get function
- [x] Add Serverless config
- [x] Enable CORS
- [x] Implement API versioning
- [x] Add Unit Tests
- [x] Add OpenAPI Documentation
- [x] Add ESLint.
- [ ] Enhance get API by adding query parameters and result customization.
- [ ] Expand sample to add put post and delete functions
- [ ] Implement various AWS resource integrations.
- [ ] Secure API with Auth Token / Access key.
- [ ] Add deployment pipeline.
- [ ] Add integration test.
- [ ] Secure API behind firewll
- [ ] Add dns using route 53

