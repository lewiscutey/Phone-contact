var express = require('express');
var router = express.Router();

router.use("/ajax",function (req,res) {
   var data = [
       {name:"张三",phone:"18435122248",en:"Z"},
       {name:"张三",phone:"18435122248",en:"Z"},
       {name:"张三",phone:"18435122248",en:"Z"},
       {name:"李四",phone:"18435122248",en:"L"},
       {name:"李四",phone:"18435122248",en:"L"},
       {name:"王五",phone:"18435122248",en:"W"},
       {name:"王五",phone:"18435122248",en:"W"},
       {name:"王五",phone:"18435122248",en:"W"},
       {name:"赵六",phone:"18435122248",en:"Z"},
       {name:"赵六",phone:"18435122248",en:"Z"},
       {name:"赵六",phone:"18435122248",en:"Z"},
       {name:"马七",phone:"18435122248",en:"M"},
   ];
   res.send(JSON.stringify(data));
});


module.exports = router;