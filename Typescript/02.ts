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

// Generics -> acceps any kind of datatype in a function, class
// and you must mention what kind of datatype is being passed to function while calling it and class while creating
// its instance

function swap(i1: number, i2: number) {
  return [i2, i1];
}

function swapString(i1: string, i2: string) {
  return [i2, i1];
}

// can implement dry principle for above code using generics

function swapGeneric<T>(a: T, b: T) {
  return [b, a];
}

swapGeneric<string>("Hello, ", "Gaurab");
swapGeneric<number>(3, 2);

class Box<T> {
  constructor(data: T) {
    console.log("Data: ", data);
  }
}

const b3 = new Box<number>(44);
const b2 = new Box<string>("Hello World");

// Utility Types

// Record specifies the datatype of object key and values, 1st string is for key and 2nd string is for value
let info: Record<string, string> = {
  name: "Ram",
  location: "Nepa;",
};

info["profession"] = "Teacher";

type Roles = "admin" | "owner";

// now here key is always either admin or owner and the key contain both owner and admin
// can only hold two keys
let PeopleAndRoles: Record<Roles, string[]> = {
  owner: [],
  admin: [],
};

// Pick
// it picks the type which is specified

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Task1",
  completed: true,
};

type newType = Omit<Todo, "description">; // it tells include everything from Todo interfece except decription in newType

type demo = "1" | "2" | "3";

type demoExcude = Exclude<demo, "2">; // it excludes the speciied value from demo type

// both omit and exclude, removed specified values
// but omit works in object and exclude is for type

// Partial

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo4: Todo = {
  title: "Task 1",
  description: "This is decription",
  completed: true,
};

const todo3 = updateTodo(todo4, { description: "description updated" });
