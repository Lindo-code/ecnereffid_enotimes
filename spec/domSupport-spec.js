const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const document = new JSDOM(fs.readFileSync("./index.html", "utf-8")).window
  .document;
global.document = document;

const { obj } = require("../src/domSupport");

describe("addNotes()", () => {
  it("should set random notes to html when Get Random Notes Button is Clicked", () => {
    global.document.querySelector(".random-notes-btn").click();
    expect(global.document.querySelector(".first-note").innerHTML.split("").length).toBe(1);
    expect(global.document.querySelector(".second-note").innerHTML.split("").length).toBe(1);
    expect(global.document.querySelector(".first-note").innerText).not.toBe("-");
  });
});

describe("answer()", () => {
  it("should display 'You've Got It Right. Well Done!' when Check Answer button is clicked with correct input.", () => {
    obj.store.notes = ["A","Bb"];
    obj.store.num = 1;
    global.document.querySelector(".answer-btn").click();
    expect(global.document.querySelector(".guide").innerText).toBe("You've Got It Right. Well Done!");
  });
  it("should display 'Sorry Wrong answer! Try again' when Check Answer button is clicked with incorrect input.", () => {
    obj.store.notes = ["A","Bb"];
    obj.store.num = 3;
    global.document.querySelector(".answer-btn").click();
    expect(global.document.querySelector(".guide").innerText).toBe("Sorry Wrong Answer! Try Again");
  });
  it("should display 'Please Enter A Number. Then Check.' when Check Answer button is clicked with no input.", () => {
    global.document.querySelector(".answer-btn").click();
    expect(global.document.querySelector(".guide").innerText).toBe("Please Enter A Number. Then Check.")
  });
  it("should display 'Please Enter A Non Negative Number.' when Check Answer button is clicked with negative number as input.", () => {
    obj.store.num = -3;
    global.document.querySelector(".answer-btn").click();
    expect(global.document.querySelector(".guide").innerText).toBe("Please Enter A Non Negative Number.")
  });
  it("should display 'Your Answer Cannot Be Greater Than 12.' when Check Answer button is clicked with number greater than 12 as input.", () => {
    obj.store.num = 13;
    global.document.querySelector(".answer-btn").click();
    expect(global.document.querySelector(".guide").innerText).toBe("Your Answer Cannot Be Greater Than 12.")
  });
});

