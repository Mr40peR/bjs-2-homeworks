class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state = this.state * 1.5;
	}

  set state(num) {
    if (num < 0) {
      this._state = 0;
    }
    else if (num > 100) {
      this._state = 100;
    }
    else {
      this._state = num;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
		super(name, releaseDate, pagesCount, state, type);
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
		super(name, releaseDate, pagesCount, state, type, author);
		this.author = author;
	}
}


class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}

class Library {
	constructor (name, books) {
		this.name = name;
		this.books = [];
	}

  	addBook (book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
    	const result = this.books.filter(books => books.type === value);
	  	return result;
	}
}