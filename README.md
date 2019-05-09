# jest-self-signed-certificate

Repo for testing setting up NODE_TLS_REJECT_UNAUTHORIZED with Jest

- `yarn` or `npm install` to install dependencies
- `npm test` to run tests, and notice that test fails as follows:

```
 FAIL  src/__tests__/server.test.js
  server
    ✕ server sends response (38ms)

  ● server › server sends response

    self signed certificate
```
