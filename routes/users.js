import express, { request } from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  // 仮のデータベースを作成
  {
    name: "user1",
    age: 11,
    id: uuidv4(), // idを生成
  },
  {
    name: "user2",
    age: 22,
    id: uuidv4(),
  },
  {
    name: "user3",
    age: 33,
    id: uuidv4(),
  },
];

router.get("/", (request, response) => {
  //  /usersにリクエストが入ったら、ユーザー一覧のデータを返す
  response.send(users);
});

router.get("/:id", (request, response) => {
  // /users/idのように、idの指定がある時は、該当idの情報のみ返す
  const { id } = request.params; // request.paramsは{key: value}になっているオブジェクトで、{id} = request.paramsでアンパック
  const getUser = users.find((user) => user.id === id); // 配列のfindメソッドで該当idを絞る
  response.send(getUser);
});

router.post("/", (request, response) => {
  users.push({ ...request.body, id: uuidv4() });
  response.send("POST has reached");
});

// PATCHメソッドを追加
router.patch("/:id", (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;
  const user = users.find((user) => user.id === id);
  if (name) user.name = name;
  if (age) user.age = age;
  response.send(`${id} has been updated`);
});

export default router;
