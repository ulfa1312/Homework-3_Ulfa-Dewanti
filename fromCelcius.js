const Convert = require("./Convert");

test("temperature convertion from Celcius", () => {
   const conv = new Convert();
   expect(conv.fromCelcius("far", 50)).toBe(122);
});
