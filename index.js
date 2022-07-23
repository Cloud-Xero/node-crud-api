import express from "express";
import useRoutes from "./routes/users.js"; // userRoutesをインポート

const app = express(); // express のインスタンス化
const PORT = 3000;

// パスにリクエストが入ると、後のコールバック関数が呼び出される
app.get("/", (request, response) => {
  response.send("Welcome");
});

// listen() メソッドを実行して、3000番ポートで待ち受け
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
