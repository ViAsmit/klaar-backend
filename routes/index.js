const { log } = require("debug");
var express = require("express");
var router = express.Router();
const { Client } = require("pg");

var DBURL =
  "postgres://nwjgskemgrvdqs:744c55daa1e17be2361ff725688c74dcf483ee20eb1ecd1164487ccc901f6b44@ec2-34-239-55-93.compute-1.amazonaws.com:5432/d8klc07384mtqo";

const client = new Client({
  connectionString: DBURL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

router.get("/", function (req, res, next) {
  const q = req.query.q.toUpperCase();
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  // console.log(req.query);
  console.log(q, limit, offset);

  var arr = [];
  client.query(
    `SELECT * FROM branches WHERE ifsc LIKE '${q}%' OR branch LIKE '${q}%' OR address LIKE '${q}%' OR city LIKE '${q}%' OR district LIKE '${q}%' OR state LIKE '${q}%'ORDER BY ifsc LIMIT ${limit} OFFSET ${offset};`,
    (err, data) => {
      if (err) throw err;
      for (let row of data.rows) {
        arr.push(row);
      }
      res.send(arr);
    }
  );
});

/* GET home page. */
router.get("/autocomplete", function (req, res, next) {
  const q = req.query.q;
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  // console.log(req.query);
  console.log(q, limit, offset);

  var arr = [];
  client.query(
    `SELECT * FROM branches WHERE branch LIKE '${q.toUpperCase()}%' ORDER BY ifsc LIMIT ${limit} OFFSET ${offset};`,
    (err, data) => {
      if (err) throw err;
      for (let row of data.rows) {
        arr.push(row);
      }
      res.send(arr);
    }
  );
});

module.exports = router;
