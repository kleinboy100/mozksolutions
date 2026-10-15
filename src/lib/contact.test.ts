import { describe, expect, it } from "bun:test";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "./contact";

describe("MOZK contact destinations", () => {
  it("uses the requested email", () => {
    expect(CONTACT_EMAIL).toBe("mozksolutions@gmail.com");
  });
  it("directs WhatsApp to the South African number 0670405952", () => {
    expect(WHATSAPP_NUMBER).toBe("0670405952");
    expect(WHATSAPP_URL).toBe("https://wa.me/27670405952");
  });
});