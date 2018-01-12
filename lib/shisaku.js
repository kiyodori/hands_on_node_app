'use strict';

const request = require('request');

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
      console.log(data);
    });
  }

  // 他のAPIへのアクセスはメソッドをここに追記する

};
