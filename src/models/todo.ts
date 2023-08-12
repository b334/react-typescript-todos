import { v4 } from "uuid";

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = v4();
  }
}

export default Todo;
