export class DBService {
  todos = [
    {
      id: 1,
      task: "task1",
      assignee: "assignee1000",
      status: "completed",
    },
    {
      id: 2,
      task: "task2",
      assignee: "assignee1001",
      status: "completed",
    },
    {
      id: 3,
      task: "task3",
      assignee: "assignee1002",
      status: "completed",
    },
    {
      id: 4,
      task: "task4",
      assignee: "assignee1000",
      status: "completed",
    },
  ];

  getToDos(): any {
    return this.todos;
  }

  addToDo(task) {
    task.id = this.todos.length + 1;
    this.todos.push(task);
    console.log(JSON.stringify(this.todos));
    return {
      message: "task added",
      tasks: this.todos.length,
    };
  }

  deleteToDos(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    return {
      message: "task deleted",
      tasks: this.todos.length,
    };
  }

  editTodos(task): any {
    this.todos = this.todos.map((todo) => {
      if (todo.id === task.id) todo = task;
      return todo;
    });
    return {
      message: "task edited",
      tasks: this.todos.length,
    };
  }
}
