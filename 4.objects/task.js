function Student (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty('marks') === true) {
  	this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if (this.hasOwnProperty('marks') === true && this.marks.length !== 0) {
  	return this.marks.reduce((acc, item, index, marks) => {
      acc += item;
      if (index === marks.length -1) {
          return acc / marks.length;
      }
      return acc;
    }, 0)
  }
  else {return 0;}
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
