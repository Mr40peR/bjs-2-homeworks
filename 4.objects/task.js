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
  if (Student.hasOwnProperty('marks') === true) {
  	this.marks = marksToAdd;
  }
}

Student.prototype.getAverage = function () {
  if (Student.hasOwnProperty('marks') === true || this.marks !== 0) {
  	return this.marks.reduce((acc, item, index) => {
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
  delete Student.subject;
  delete Student.marks;
  this.excluded = reason;
}
