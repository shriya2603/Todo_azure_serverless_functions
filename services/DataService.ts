import { DBService } from "./DBService";
class DataService {
  dbService: any;
  constructor() {
    this.dbService = new DBService();
  }

  getTodos(context: any) {
    try {
      const todos = this.dbService.getToDos();
      context.res.status(200).json(todos);
    } catch (error) {
      context.res.status(500).send(error);
    }
  }

  addTodos(context: any) {
    try {
      const response = this.dbService.addToDo(context.req.body.task);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    }
  }

  deleteTodos(context: any) {
    try {
      const response = this.dbService.deleteToDos(context.req.params.id);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    }
  }

  editTodos(context: any) {
    try {
      const response = this.dbService.editTodos(context.req.body.task);
      context.res.status(200).json(response);
    } catch (error) {
      context.res.status(500).send(error);
    }
  }
}
export const dataService = new DataService();
