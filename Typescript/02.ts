// Enums, Generics, Utility, Types, Classes

// Enums are like array where constant values are stored in form of object

enum LogType {
  ERROR = "ERROR",
  INFO = "INFO",
}

// if value of enum members arent provided then it initialize
// its values as its index in increasing order starting from 0
// if the first member value is initialized then the rest of it is in increasing
// order starting from the value of 1st member

enum Demo {
  hi = 23,
  hello, //hello value is now 24
}

// console.log(LogType.ERROR);

// private, public, static
class MatchScore {
  static score = 1;
  public getScore() {
    return MatchScore.score;
  }

  incr() {
    MatchScore.score++;
  }
}

let match1 = new MatchScore();
console.log(match1.getScore());
match1.incr();

let match2 = new MatchScore();
console.log(match2.getScore());
