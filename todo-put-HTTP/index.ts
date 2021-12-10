import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { dataService } from "../services/DataService";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");

  if (req.body && req.body.task) {
    context.res = {
      status: 200,
      body: dataService.editTodos(context),
    };
  } else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body",
    };
  }
};

export default httpTrigger;
