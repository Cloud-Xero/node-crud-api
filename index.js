import express from "express";
import useRoutes from "./routes/users.js"; // userRoutesをインポート

const app = express(); // express のインスタンス化
const PORT = 3000;

// リクエストの中身を解析するミドルウェアを追加
app.use(express.json());

// /usersパスの処理を定義するミドルウェア（/usersにアクセスが来たら、useRoutes関数が実行される）
app.use("/users", useRoutes);

// パスにリクエストが入ると、後のコールバック関数が呼び出される
app.get("/", (request, response) => {
  response.send("Welcome");
});

// listen() メソッドを実行して、3000番ポートで待ち受け
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
