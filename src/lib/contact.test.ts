import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "./contact";

describe("MOZK contact destinations", () => {
  it("uses the requested email", () => {
    assert.equal(CONTACT_EMAIL, "mozksolutions@gmail.com");
  });
  it("directs WhatsApp to the South African number 0670405952", () => {
    assert.equal(WHATSAPP_NUMBER, "0670405952");
    assert.equal(WHATSAPP_URL, "https://wa.me/27670405952");
  });
});