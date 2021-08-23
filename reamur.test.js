const Convert = require("./Convert");

test("convertion temp from celcius", () => {
   const konv = new Convert();
   expect(konv.fromReamur("cel", 122)).toBe(152.5);
});
