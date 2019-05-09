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

- This issue seems to have been introduced since jest@22 (details: [facebook/jest#8449](https://github.com/facebook/jest/issues/8449))
- Confirmed in branch `jest-21` that this issue is not reproducible in jest@21
