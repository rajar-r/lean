

var express = require('express');
var router = express.Router();
var Product = require('../model/product');

// GET : /products

router.get('/', function (req, res, next) { 
    Product.find({}, function (err, items) {
        if (err) {
            console.log(err);
        }
        //resp.render('products', {products:result});
        res.json(items);
    });
});

router.get('/:id', function (req,res,next) { 

    Product.find({ id: req.params.id }, function (err, item) {
        //resp.render('product-view', {product:item});
        res.json(item);
    });    
    
});


router.post('/', function (req, res, next) {
    
    var doc = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        description:req.body.description
    }

    var product = new Product(doc);
    product.save(function (err,prod) { 
        res.status(201).json(prod);
    })

});



router.put('/:id', function (req, res, next) {

    console.log('updating...');
    
    var doc = {
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        description:req.body.description
    }

    Product.findOneAndUpdate(doc, function (err, product) { 
        if (err) console.log(err);
        res.send('product updated...');
    });
    
});



router.delete('/:id', function (req, res, next) {
    
    Product.remove({ id: req.params.id }, function () { 
        res.send('product deleted...');
    });

});



module.exports = router;