var express = require('express');
var router = express.Router();

// // レスポンスのデータ（ノート全件）
// const responseObjectDataAll = {
//     textObject1 : {
//         id: 1,
//         title: 'ノート１のタイトルです',
//         subTitle: 'ノート１のサブタイトルです',
//         bodyText: 'ノート１の本文です'
//     },
//     textObject2 : {
//         id: 2,
//         title: 'ノート２のたいとるです',
//         subTitle: 'ノート２のサブタイトルです',
//         bodyText: 'ノート２の本文です'
//     },
// };

// /**
//  * メモを全件取得するAPI
//  * @returns {Object[]} data
//  * @returns {number} data.id - ID
//  * @returns {string} data.title - タイトル
//  * @returns {string} data.text - 内容
//  */
// router.get('/', function (req, res, next) {
//     // 全件取得して返す
//     res.json(responseObjectDataAll);
// })

// 第8回
// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "**************";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    // データベース、コレクションを指定
    const database = client.db('notes');
    const notes = database.collection('notes');

    // idが１のドキュメントを取得
    const query = {id: 1};
    const note = await notes.findOne(query);

    res.json(note);
})

module.exports = router;