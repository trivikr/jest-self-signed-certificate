/**
 * @jest-environment node
 */
const server = require("../server");
const axios = require("axios");

test("server runs at provided port", async () => {
  const port = 2397;

  // create server on port
  const httpServer = server(port);

  // Get response from port and verify
  const response = await axios.get(`http://localhost:${port}`);
  expect(response.data).toBe("HELLO WORLD!");

  // Close the server
  httpServer.close();
});
