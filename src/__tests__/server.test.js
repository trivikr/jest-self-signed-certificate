/**
 * @jest-environment node
 */
const axios = require("axios");

describe("server", () => {
  let server;
  let httpsServer;
  const PORT = 2397;
  const rejectUnauthorizedEnv = process.env.NODE_TLS_REJECT_UNAUTHORIZED;

  beforeEach(() => {
    // create server on port
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    server = require("../server");
    httpsServer = server(PORT);
  });

  afterEach(() => {
    httpsServer.close();
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = rejectUnauthorizedEnv;
  });

  it("server sends response", async () => {
    // Get response from port and verify
    const response = await axios.get(`https://localhost:${PORT}`);
    expect(response.data).toBe("HELLO WORLD!");
  });
});
