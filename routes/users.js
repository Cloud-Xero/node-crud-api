import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
  // 仮のデータベースを作成
  {
    name: 'user1',
    age: 11,
    id: uuidv4(), // idを生成
  },
  {
    name: 'user2',
    age: 22,
    id: uuidv4(),
  },
  {
    name: 'user3',
    age: 33,
    id: uuidv4(),
  },
];

router.get('/', (request, response) => {
  //  /usersにリクエストが入ったら、ユーザー一覧のデータを返す
  response.send(users);
});

router.get('/:id', (request, response) => {
  // /users/idのように、idの指定がある時は、該当idの情報のみ返す
  const { id } = request.params; // request.paramsは{key: value}になっているオブジェクトで、{id} = request.paramsでアンパック
  const getUser = users.find((user) => user.id === id); // 配列のfindメソッドで該当idを絞る
  response.send(getUser);
});

export default router;
