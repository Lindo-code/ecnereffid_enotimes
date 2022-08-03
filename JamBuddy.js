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
      return answer === finalAns;
    }
    finalAns = this.notes[this.currSelectedNotes[1]] - this.notes[this.currSelectedNotes[0]];
    return answer === finalAns;
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

module.exports = {JamBuddy};
