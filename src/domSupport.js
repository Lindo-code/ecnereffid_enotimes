const { JamBuddy } = require("./JamBuddy");

const obj = {
  randomNotesButton: document.querySelector(".random-notes-btn"),
  answerInput: document.querySelector(".ans-input"),
  answerButton: document.querySelector(".answer-btn"),
  guide: document.querySelector(".guide"),
  guideColor: document.querySelector(".value_ans"),
  firstNote: document.querySelector(".first-note"),
  secondNote: document.querySelector(".second-note"),
  revealNotesButton: document.querySelector(".reveal-btn"),
  revealGuide: document.querySelector("#explanation"),
  revealAns: document.querySelector(".reveal_answer"),
  notesBorder: document.querySelector(".guide"),
  streak: document.querySelector(".streak"),
  notes: document.querySelectorAll(".tone"),
  ans: 0,
  store: {
    notes: [],
    num: "empty",
    ans: 0,
    streak: 0
  },
};

document.addEventListener("DOMContentLoaded", function() {
  const buddy = new JamBuddy();
  const note = buddy.selectNotes();
  obj.firstNote.innerText = note[0];
  obj.secondNote.innerText = note[1];
  obj.guideColor.style.color = "black";
  obj.guide.innerText = "Great Now Enter Your Answer Above";
  obj.store.notes = [];
  obj.store.notes.push(note[0]);
  obj.store.notes.push(note[1]);
  obj.store.ans = answer(); 
  obj.store.streak = 0;
  obj.revealAns.style.color = "black";
  obj.revealGuide.style.backgroundColor = "gold";
});

obj.randomNotesButton.addEventListener("click", () => {
  if(obj.answerButton.style.display === "none") {
    obj.answerButton.style.display = "block";
  }
  obj.revealAns.style.display = "block"
  obj.guide.style.display = "block";  
  obj.revealGuide.style.display = "none";
  obj.revealNotesButton.innerText = "Reveal Answer";
  obj.revealAns.style.color = "black";
  obj.revealGuide.style.backgroundColor = "gold";
  obj.notes.forEach((note) => {
    note.style.backgroundColor = "red";
  });
  const buddy = new JamBuddy();
  const notes = buddy.selectNotes();
  obj.firstNote.innerText = notes[0];
  obj.secondNote.innerText = notes[1];
  obj.guideColor.style.color = "black";
  obj.guide.innerText = "Great Now Enter Your Answer Above";
  obj.store.notes = [];
  obj.store.notes.push(notes[0]);
  obj.store.notes.push(notes[1]);
  obj.store.ans = answer();
});

obj.revealNotesButton.addEventListener("click", () => {
  obj.revealAns.innerText = `Final Answer ${obj.store.ans}`;
  obj.revealAns.style.display = "block"
  if(obj.revealNotesButton.innerText === "Hide Answer") {
    obj.guide.style.display = "block";  
    obj.revealGuide.style.display = "none";
    obj.revealNotesButton.innerText = "Reveal Answer";
    obj.guideColor.style.color = "black";
  } else {
    obj.revealAns.style.display = "block"
    obj.revealAns.style.color = "black";
    obj.revealGuide.style.backgroundColor = "gold";
    obj.guide.style.display = "none";  
    obj.revealGuide.style.display = "block";
    obj.revealNotesButton.innerText = "Hide Answer";
    obj.answerButton.style.display = "none";
    obj.guide.innerText = "Press Get Random Notes To Continue!";
  }
  revealAnswer();
});

obj.answerInput.addEventListener("change", () => {
  obj.store.num = obj.answerInput.value;
});

obj.answerButton.addEventListener("click", () => {
  if(obj.revealNotesButton.innerText === "Hide Answer") {
    obj.guide.style.display = "block";  
    obj.revealGuide.style.display = "none";
    obj.revealNotesButton.innerText = "Reveal Answer";
  }
  if (obj.firstNote.innerText === "-") {
    obj.revealGuide.style.display = "none";
    obj.guide.style.display = "block"
    obj.guideColor.style.color = "red";
    obj.guide.innerText = "Press Get Random Notes To Start!";
  } else if (isNaN(obj.store.num)) {
    obj.revealGuide.style.display = "none";
    obj.guide.style.display = "block"
    obj.guideColor.style.color = "red";
    obj.guide.innerText = "Please Enter A Number. Then Check.";
  } else if (Number(obj.store.num) < 0) {
    obj.revealGuide.style.display = "none";
    obj.guide.style.display = "block"
    obj.guideColor.style.color = "red";
    obj.guide.innerText = "Please Enter A Non Negative Number.";
    obj.answerInput.value = "";
    obj.store.num = "empty";
  } else if (Number(obj.store.num) > 12) {
    obj.revealGuide.style.display = "none";
    obj.guide.style.display = "block"
    obj.guideColor.style.color = "red";
    obj.guide.innerText = "Your Answer Cannot Be Greater Than 12.";
    obj.answerInput.value = "";
    obj.store.num = "empty";
  } else {
    const buddy = new JamBuddy();
    buddy.currSelectedNotes = obj.store.notes;
    const ans = buddy.checkAnswer(Number(obj.store.num));
    if (ans === true) {
      revealAnswer()
      obj.store.streak++;
      obj.revealAns.style.display = "none"
      obj.guide.style.display = "block"
      obj.guideColor.style.color = "green";
      obj.guide.innerText = "You've Got It Right. Well Done!";
      obj.revealGuide.style.display = "block";
      obj.revealNotesButton.innerText = "Hide Answer";
      obj.streak.innerText = `Winning Streak: ${obj.store.streak}`;
      obj.answerButton.style.display = "none";
      obj.guide.innerText = "Press Get Random Notes To Continue!";
    } else {
      obj.revealGuide.style.display = "none";
      obj.guide.style.display = "block"
      obj.guideColor.style.color = "red";
      obj.guide.innerText = "Sorry Wrong Answer! Try Again";
      obj.store.streak = 0;
      obj.streak.innerText = `Winning Streak: ${obj.store.streak}`;
    }
    obj.answerInput.value = "";
    obj.store.num = "empty";
  }
});

function revealAnswer() {
  obj.notes.forEach((note) => {
    if(note.getAttribute("note").length > 2 && note.getAttribute("note").slice(0,2) === obj.store.notes[0] || note.getAttribute("note").length > 2 && note.getAttribute("note").slice(0,2) === obj.store.notes[1] || note.getAttribute("note").length > 2 && note.getAttribute("note").slice(3) === obj.store.notes[0] || note.getAttribute("note").length > 2 && note.getAttribute("note").slice(3) === obj.store.notes[1]) {
      note.style.backgroundColor = "white";
    }
    if (note.getAttribute("note") === obj.store.notes[0] || note.getAttribute("note") === obj.store.notes[1]) {
      note.style.backgroundColor = "white";
    }
  });
}

function answer() {
  const buddy = new JamBuddy();
  if(buddy.notes[obj.store.notes[1]] < buddy.notes[obj.store.notes[0]]) {
    let difference = 12 - buddy.notes[obj.store.notes[0]];
    return difference + buddy.notes[obj.store.notes[1]];
  }
  return buddy.notes[obj.store.notes[1]] - buddy.notes[obj.store.notes[0]];
}

module.exports = {obj};