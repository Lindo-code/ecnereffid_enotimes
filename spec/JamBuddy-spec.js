const { JamBuddy } = require("../src/JamBuddy.js");

describe("JamBuddy", () => {
  const buddy = new JamBuddy();
  let currSelectedNotes = buddy.currSelectedNotes;
  let notes;
  let check;

  describe("selectNotes()", () => {
    it("should return true if selected notes are 'A' & 'B'", () => {
      currSelectedNotes = ["A", "B"];
      notes = currSelectedNotes;
      expect(notes).toEqual(currSelectedNotes);
    });
  });

  describe("checkAnswer()", () => {
    it("should return false, if parameter is any number except 3 and selected notes are 'A' & 'B'", () => {
      buddy.currSelectedNotes = ["A", "B"];
      check = buddy.checkAnswer(3);
      expect(check).toBe(false);
    });

    it("should return true, if parameter is 2 and selected notes are 'A' & 'B'", () => {
      buddy.currSelectedNotes = ["A", "B"];
      check = buddy.checkAnswer(2);
      expect(check).toBe(true);
    });
  });

  describe("selectNotes()", () => {
    it("should return true if selected notes are 'G#' & 'B'", () => {
      buddy.currSelectedNotes = ["G#", "B"];
      notes = currSelectedNotes;
      expect(notes).toEqual(currSelectedNotes);
    });
  });

  describe("checkAnswer()", () => {
    it("should throw 'Enter Number', if parameter is empty or if parameter is not a number", () => {
      expect(() => {
        buddy.checkAnswer();
      }).toThrowError("Enter Number");
    });

    it("should return false, if parameter is any number except 3 and selected notes are 'G#' & 'B'", () => {
      buddy.currSelectedNotes = ["G#", "B"];
      check = buddy.checkAnswer(1);
      expect(check).toBe(false);
    });

    it("should return true, if parameter is 3 and selected notes are 'G#' & 'B'", () => {
      buddy.currSelectedNotes = ["G#", "B"];
      check = buddy.checkAnswer(3);
      expect(check).toBe(true);
    });
  });

  describe("selectNotes()", () => {
    it("should return true if selected notes are 'A#' & 'Db'", () => {
      buddy.currSelectedNotes = ["A#", "Db"];
      notes = currSelectedNotes;
      expect(notes).toEqual(currSelectedNotes);
    });
  });

  describe("checkAnswer()", () => {
    it("should return false, if parameter is any number except 3 and selected notes are 'A#' & 'Db'", () => {
      buddy.currSelectedNotes = ["A#", "Db"];
      check = buddy.checkAnswer(1);
      expect(check).toBe(false);
    });

    it("should return true, if parameter is 3 and selected notes are 'A#' & 'Db'", () => {
      buddy.currSelectedNotes = ["A#", "Db"];
      check = buddy.checkAnswer(3);
      expect(check).toBe(true);
    });
  });
});
