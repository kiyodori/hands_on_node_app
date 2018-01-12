'use strict';

const request = require('request');

module.exports = class Shisaku {
  constructor() {
    this.SUPPORT_URL = 'https://api.sesaku.mirasapo.jp/op/supports.json';
  }

  // 制度情報を取得する
  support() {
    const qs = {
      count: 1
    };

    this.get(this.SUPPORT_URL, qs);
  }

  // 他のAPIへのアクセスはメソッドをここに追記する

  get(url, qs) {
    request.get({
      uri: url,
      headers: {'Content-type': 'application/json'},
      json: true,
      qs: qs
    }, function(err, req, data){
      console.log(data);
    });
  }
};
