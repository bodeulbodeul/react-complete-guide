class Todo {
  id: string;
  text: string;

  constructor(todoTeext: string) {
    this.text = todoTeext;
    this.id = Math.random().toString();
  }
}
export default Todo;
