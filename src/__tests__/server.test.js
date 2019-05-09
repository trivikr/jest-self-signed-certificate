/**
 * @jest-environment node
 */
const server = require("../server");
const axios = require("axios");

describe("server", () => {
  let httpsServer;
  const PORT = 2397;

  beforeEach(() => {
    // create server on port
    httpsServer = server(PORT);
  });

  afterEach(() => {
    httpsServer.close();
  });

  it("server sends response", async () => {
    // Get response from port and verify
    const response = await axios.get(`https://localhost:${PORT}`);
    expect(response.data).toBe("HELLO WORLD!");
  });
});
