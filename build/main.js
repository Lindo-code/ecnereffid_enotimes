/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JamBuddy.js":
/*!*************************!*\
  !*** ./src/JamBuddy.js ***!
  \*************************/
/***/ ((module) => {

eval(" class JamBuddy {\n  constructor() {\n    this.notes = {'A': 1, 'A#': 2, 'Bb':2, 'B':3, 'C':4, 'C#':5, 'Db':5, 'D':6, 'D#':7, 'Eb':7, 'E':8, 'F':9, 'F#':10, 'Gb':10, 'G':11,  'G#':12, 'Ab':12\n    };\n    this.currSelectedNotes = [];\n  }\n  selectNotes() {\n    const firstNote = this.getRandomProperty(this.notes, null)\n    const secondNote = this.getRandomProperty(this.notes, firstNote)\n    this.currSelectedNotes = [firstNote, secondNote];\n    return this.currSelectedNotes;\n  }\n  checkAnswer(answer) {\n    let finalAns = 0;\n    if(answer === undefined || isNaN(answer)) {throw Error(\"Enter Number\");}\n    if(this.notes[this.currSelectedNotes[1]] < this.notes[this.currSelectedNotes[0]]) {\n      let difference = 12 - this.notes[this.currSelectedNotes[0]];\n      finalAns = difference + this.notes[this.currSelectedNotes[1]];\n      return answer === finalAns;\n    }\n    finalAns = this.notes[this.currSelectedNotes[1]] - this.notes[this.currSelectedNotes[0]];\n    return answer === finalAns;\n  }\n  getRandomProperty(notes, test) {\n    const keys = Object.keys(notes);\n    const randomInt = Math.floor(Math.random() * keys.length);\n    let note = keys[randomInt];\n    while(note === test) {\n      note = keys[randomInt];\n    }\n    return note;\n  }\n}\n\nmodule.exports = {JamBuddy};\n\n\n//# sourceURL=webpack://ecnereffid_enotimes/./src/JamBuddy.js?");

/***/ }),

/***/ "./src/domSupport.js":
/*!***************************!*\
  !*** ./src/domSupport.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { JamBuddy } = __webpack_require__(/*! ./JamBuddy */ \"./src/JamBuddy.js\");\n\nconst obj = {\n  randomNotesButton: document.querySelector(\".random-notes-btn\"),\n  answerInput: document.querySelector(\".ans-input\"),\n  answerButton: document.querySelector(\".answer-btn\"),\n  guide: document.querySelector(\".guide\"),\n  guideColor: document.querySelector(\".value_ans\"),\n  firstNote: document.querySelector(\".first-note\"),\n  secondNote: document.querySelector(\".second-note\"),\n  revealNotesButton: document.querySelector(\".reveal-btn\"),\n  revealGuide: document.querySelector(\"#explanation\"),\n  revealAns: document.querySelector(\".reveal_answer\"),\n  notesBorder: document.querySelector(\".guide\"),\n  streak: document.querySelector(\".streak\"),\n  notes: document.querySelectorAll(\".tone\"),\n  ans: 0,\n  store: {\n    notes: [],\n    num: \"empty\",\n    ans: 0,\n    streak: 0\n  },\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const buddy = new JamBuddy();\n  const note = buddy.selectNotes();\n  obj.firstNote.innerText = note[0];\n  obj.secondNote.innerText = note[1];\n  obj.guideColor.style.color = \"black\";\n  obj.guide.innerText = \"Great Now Enter Your Answer Above\";\n  obj.store.notes = [];\n  obj.store.notes.push(note[0]);\n  obj.store.notes.push(note[1]);\n  obj.store.ans = answer(); \n  obj.store.streak = 0;\n  obj.revealAns.style.color = \"black\";\n  obj.revealGuide.style.backgroundColor = \"gold\";\n});\n\nobj.randomNotesButton.addEventListener(\"click\", () => {\n  if(obj.answerButton.style.display === \"none\") {\n    obj.answerButton.style.display = \"block\";\n  }\n  obj.revealAns.style.display = \"block\"\n  obj.guide.style.display = \"block\";  \n  obj.revealGuide.style.display = \"none\";\n  obj.revealNotesButton.innerText = \"Reveal Answer\";\n  obj.revealAns.style.color = \"black\";\n  obj.revealGuide.style.backgroundColor = \"gold\";\n  obj.notes.forEach((note) => {\n    note.style.backgroundColor = \"red\";\n  });\n  const buddy = new JamBuddy();\n  const notes = buddy.selectNotes();\n  obj.firstNote.innerText = notes[0];\n  obj.secondNote.innerText = notes[1];\n  obj.guideColor.style.color = \"black\";\n  obj.guide.innerText = \"Great Now Enter Your Answer Above\";\n  obj.store.notes = [];\n  obj.store.notes.push(notes[0]);\n  obj.store.notes.push(notes[1]);\n  obj.store.ans = answer();\n});\n\nobj.revealNotesButton.addEventListener(\"click\", () => {\n  obj.revealAns.innerText = `Final Answer ${obj.store.ans}`;\n  obj.revealAns.style.display = \"block\"\n  if(obj.revealNotesButton.innerText === \"Hide Answer\") {\n    obj.guide.style.display = \"block\";  \n    obj.revealGuide.style.display = \"none\";\n    obj.revealNotesButton.innerText = \"Reveal Answer\";\n    obj.guideColor.style.color = \"black\";\n    obj.guide.innerText = \"Press Get Random Notes To Continue!\";\n  } else {\n    obj.revealAns.style.display = \"block\"\n    obj.revealAns.style.color = \"black\";\n    obj.revealGuide.style.backgroundColor = \"gold\";\n    obj.guide.style.display = \"none\";  \n    obj.revealGuide.style.display = \"block\";\n    obj.revealNotesButton.innerText = \"Hide Answer\";\n    obj.answerButton.style.display = \"none\";\n    obj.guide.innerText = \"Press Get Random Notes To Continue!\";\n  }\n  revealAnswer();\n});\n\nobj.answerInput.addEventListener(\"change\", () => {\n  obj.store.num = obj.answerInput.value;\n});\n\nobj.answerButton.addEventListener(\"click\", () => {\n  if(obj.revealNotesButton.innerText === \"Hide Answer\") {\n    obj.guide.style.display = \"block\";  \n    obj.revealGuide.style.display = \"none\";\n    obj.revealNotesButton.innerText = \"Reveal Answer\";\n  }\n  if (obj.firstNote.innerText === \"-\") {\n    obj.revealGuide.style.display = \"none\";\n    obj.guide.style.display = \"block\"\n    obj.guideColor.style.color = \"red\";\n    obj.guide.innerText = \"Press Get Random Notes To Start!\";\n  } else if (isNaN(obj.store.num)) {\n    obj.revealGuide.style.display = \"none\";\n    obj.guide.style.display = \"block\"\n    obj.guideColor.style.color = \"red\";\n    obj.guide.innerText = \"Please Enter A Number. Then Check.\";\n  } else if (Number(obj.store.num) < 0) {\n    obj.revealGuide.style.display = \"none\";\n    obj.guide.style.display = \"block\"\n    obj.guideColor.style.color = \"red\";\n    obj.guide.innerText = \"Please Enter A Non Negative Number.\";\n    obj.answerInput.value = \"\";\n    obj.store.num = \"empty\";\n  } else if (Number(obj.store.num) > 12) {\n    obj.revealGuide.style.display = \"none\";\n    obj.guide.style.display = \"block\"\n    obj.guideColor.style.color = \"red\";\n    obj.guide.innerText = \"Your Answer Cannot Be Greater Than 12.\";\n    obj.answerInput.value = \"\";\n    obj.store.num = \"empty\";\n  } else {\n    const buddy = new JamBuddy();\n    buddy.currSelectedNotes = obj.store.notes;\n    const ans = buddy.checkAnswer(Number(obj.store.num));\n    if (ans === true) {\n      revealAnswer()\n      obj.store.streak++;\n      obj.revealAns.style.display = \"none\"\n      obj.guide.style.display = \"block\"\n      obj.guideColor.style.color = \"green\";\n      obj.guide.innerText = \"You've Got It Right. Well Done!\";\n      obj.revealGuide.style.display = \"block\";\n      obj.revealNotesButton.innerText = \"Hide Answer\";\n      obj.streak.innerText = `Winning Streak: ${obj.store.streak}`;\n      obj.answerButton.style.display = \"none\";\n    } else {\n      obj.revealGuide.style.display = \"none\";\n      obj.guide.style.display = \"block\"\n      obj.guideColor.style.color = \"red\";\n      obj.guide.innerText = \"Sorry Wrong Answer! Try Again\";\n      obj.store.streak = 0;\n      obj.streak.innerText = `Winning Streak: ${obj.store.streak}`;\n    }\n    obj.answerInput.value = \"\";\n    obj.store.num = \"empty\";\n  }\n});\n\nfunction revealAnswer() {\n  obj.notes.forEach((note) => {\n    if(note.getAttribute(\"note\").length > 2 && note.getAttribute(\"note\").slice(0,2) === obj.store.notes[0] || note.getAttribute(\"note\").length > 2 && note.getAttribute(\"note\").slice(0,2) === obj.store.notes[1] || note.getAttribute(\"note\").length > 2 && note.getAttribute(\"note\").slice(3) === obj.store.notes[0] || note.getAttribute(\"note\").length > 2 && note.getAttribute(\"note\").slice(3) === obj.store.notes[1]) {\n      note.style.backgroundColor = \"white\";\n    }\n    if (note.getAttribute(\"note\") === obj.store.notes[0] || note.getAttribute(\"note\") === obj.store.notes[1]) {\n      note.style.backgroundColor = \"white\";\n    }\n  });\n}\n\nfunction answer() {\n  const buddy = new JamBuddy();\n  if(buddy.notes[obj.store.notes[1]] < buddy.notes[obj.store.notes[0]]) {\n    let difference = 12 - buddy.notes[obj.store.notes[0]];\n    return difference + buddy.notes[obj.store.notes[1]];\n  }\n  return buddy.notes[obj.store.notes[1]] - buddy.notes[obj.store.notes[0]];\n}\n\nmodule.exports = {obj};\n\n//# sourceURL=webpack://ecnereffid_enotimes/./src/domSupport.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/domSupport.js");
/******/ 	
/******/ })()
;