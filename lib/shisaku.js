'use strict';

const request = require('request');
const models = require("../models");

module.exports = class Shisaku {
  constructor() {
    this.SUPPORT_URL = 'https://api.sesaku.mirasapo.jp/op/supports.json';
  }

  // 制度情報を取得する
  support() {
    request.get({
      uri: this.SUPPORT_URL,
      headers: {'Content-type': 'application/json'},
      json: true,
      qs: {
        count: 1
      }
    }, function(err, req, data){
      // ここを変更
      const supports = data['supports'];
      const parsedSupports = supports.map((support) => {
        return {
          supportId: support['id'],
          name: support['name'],
          prefectureId: support['intended_area']['prefectures'][0]['id']
        };
      });
      models.Support.bulkCreate(parsedSupports).then((supports) =>{
        console.log("[" + new Date() + "] " + supports.length + "個の施策を保存しました。");
        process.exit();
      })
    });
  }

  // 他のAPIへのアクセスはメソッドをここに追記する

};
