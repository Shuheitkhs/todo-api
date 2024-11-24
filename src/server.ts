import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
// ミドルウェアの設定
app.use(cors());
app.use(bodyParser.json());

// 型の設定todo
type Todo = { id: string; text: string; completed: boolean };
let todos: Todo[] = [];

// getですべてのtodoを取得
app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

// createで新しいtodoの作成
app.post("/todos", (req: Request, res: Response) => {
  const newTodo = {
    id: Date.now().toString(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUTで更新
app.put("/todos/:id", (req: Request, res: Response) => {
  const todoId = req.params.id;
  const matchTodo = todos.find((t) => t.id === todoId);
  if (matchTodo) {
    matchTodo.text = req.body.text ?? matchTodo.text;
    matchTodo.completed = req.body.completed ?? matchTodo.completed;
    res.json(matchTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// deleteで削除
app.delete("/todos/:id", (req: Request, res: Response) => {
  const todoId = req.params.id;
  todos = todos.filter((t) => t.id !== todoId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
