const Convert = require("./Convert");

test("convertion temp from fahrenheit", () => {
   const konv = new Convert();
   expect(konv.fromFarenheit("cel", 122)).toBe(50);
});
