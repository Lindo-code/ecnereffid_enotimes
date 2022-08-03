//selectors

const randomNotesButton = document.querySelector(".random-notes-btn");
const answerInput = document.querySelector(".ans-input");
const answerButton = document.querySelector(".answer-btn");
const guide = document.querySelector(".guide");
const guideColor = document.querySelector(".value_ans");
const firstNote = document.querySelector(".first-note");
const secondNote = document.querySelector(".second-note");
const store = {
    notes: [], 
    num: "empty"
};

//event listeners

randomNotesButton.addEventListener("click", addNotes);
answerButton.addEventListener("click", answer);
answerInput.addEventListener("change", storeValue)

//functions

function addNotes(e) {
    store.notes = [];
    const buddy = new JamBuddy();
    const notes = buddy.selectNotes();
    firstNote.innerText = notes[0];
    secondNote.innerText = notes[1];
    guideColor.style.color = "orange";
    guide.innerText = "Great Now Enter Your Answer Above";
    store.notes.push(notes[0]);
    store.notes.push(notes[1]);
}

function storeValue(value) {
    store.num = answerInput.value;
}

function answer(e) {
    if(firstNote.innerText === "-") {
      guideColor.style.color = "red";
      guide.innerText = "Press Get Random Notes To Start!"
    } else if(isNaN(store.num)) {
      guideColor.style.color = "red";
      guide.innerText = "Please Enter A Number. Then Check."
    } else if(Number(store.num) < 0) {
      guideColor.style.color = "red";
      guide.innerText = "Please Enter A Non Negative Number."
      answerInput.value = ""; store.num = "empty";
    } else if(Number(store.num) > 12) {
      guideColor.style.color = "red";
      guide.innerText = "Your Answer Cannot Be Greater Than 12."
      answerInput.value = ""; store.num = "empty";
    } else {
      const buddy = new JamBuddy();
      buddy.currSelectedNotes = store.notes;
      const ans = buddy.checkAnswer(store.num);
      if(ans === true) {
        guideColor.style.color = "green";
        guide.innerText = "You've Got It Right. Well Done!"
      } else {
        guideColor.style.color = "red";
        guide.innerText= "Sorry Wrong Answer! Try Again";
      }
      answerInput.value = ""; store.num = "empty";
    }
}
// constructors

class JamBuddy {
    constructor() {
      this.notes = {'A': 1, 'A#': 2, 'Bb':2, 'B':3, 'C':4, 'C#':5, 'Db':5, 'D':6, 'D#':7, 'Eb':7, 'E':8, 'F':9, 'F#':10, 'Gb':10, 'G':11,  'G#':12, 'Ab':12
      };
      this.currSelectedNotes = [];
    }
    selectNotes() {
      const firstNote = this.getRandomProperty(this.notes, null)
      const secondNote = this.getRandomProperty(this.notes, firstNote)
      this.currSelectedNotes = [firstNote, secondNote];
      return this.currSelectedNotes;
    }
    checkAnswer(answer) {
      let finalAns = 0;
      if(answer === undefined || isNaN(answer)) {throw Error("Enter Number");}
      if(this.notes[this.currSelectedNotes[1]] < this.notes[this.currSelectedNotes[0]]) {
        let difference = 12 - this.notes[this.currSelectedNotes[0]];
        finalAns = difference + this.notes[this.currSelectedNotes[1]];
        return answer == finalAns;
      }
      finalAns = this.notes[this.currSelectedNotes[1]] - this.notes[this.currSelectedNotes[0]];
      return answer == finalAns;
    }
    getRandomProperty(notes, test) {
      const keys = Object.keys(notes);
      const randomInt = Math.floor(Math.random() * keys.length);
      let note = keys[randomInt];
      while(note === test) {
        note = keys[randomInt];
      }
      return note;
    }
}
