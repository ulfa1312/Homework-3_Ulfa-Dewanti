const Convert = require("./Convert");

test("convertion temp from celcius", () => {
   const konv = new Convert();
   expect(konv.fromCelcius("far", 50)).toBe(122);
});
