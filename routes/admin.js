var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"IPHONE15",
      category:"mobile",
      discription :"this is a good phone",
      image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978"

    },
    {
      name:"SAMSUNG S22 Ultra",
      category:"mobile",
      discription :"this is a good phone",
      image:"https://m.media-amazon.com/images/I/41spaNtvOxL._AC_UF1000,1000_QL80_.jpg"

    },
    {
      name:"VIVO Y200e",
      category:"mobile",
      discription :"this is a good phone",
      image:"https://m.media-amazon.com/images/I/61-4WCklbbL.jpg"

    },
    {
      name:"ONE PLUS",
      category:"mobile",
      discription :"this is a good phone",
      image:"https://m.media-amazon.com/images/I/614cCf6bzyL._AC_UF1000,1000_QL80_.jpg"

    }
    
  ]
  res.render('admin/view-products',{admin:true,products});
  
});
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product');
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})

module.exports = router;
