import request from "supertest";
import handler from "../pages/api/encode";

describe("Encode API", () => {
  it("should return a shortened URL", async () => {
    const response = await request(handler)
      .post("/api/encode")
      .send({ longUrl: "https://indicina.co" });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("shortUrl");
  });
});
