const Sequelize = require("sequelize");
const User = require("./user");
const env = "development";
const config = require("../config/config")[env];

//db 연결 정보
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {}; //sequelize, object;

//key         //value(db정보)
db.sequelize = sequelize;

db.User = User; //db와 테이블 연결

User.init(sequelize); //table 초기화
User.associate(); //관계 설정

module.exports = db;
