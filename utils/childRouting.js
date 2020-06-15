const jwt               = require('./jwt.js');

const route = require('express').Router();
const uuidv5 = require('uuid').v5;
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
const ROLE_ADMIN = require('../utils/checkRole');
const { sign, verify } = require('../utils/jwt')

const CUSTOMER_MODEL    = require('../model/Customer');
const PRODUCT_MODEL     = require('../model/Products');
const ORDER_MODEL       = require('../model/Orders');
const CATEGORY_MODEL    = require('../model/Categorys');
const fs                = require('fs');

let renderToView = async function(req, res, view, data) {
    let { token } = req.session;

    let listCategory = await CATEGORY_MODEL.findAll();
    let listOrders = await ORDER_MODEL.findAll();
    let listProductBestSell = await  PRODUCT_MODEL.findBestSell();
    let listProducts = await PRODUCT_MODEL.findLimitSkip(10,0);
    let listProductsFindAll = await PRODUCT_MODEL.findAll();
    let listNewProducts = await PRODUCT_MODEL.getListNewProduct();

    if(token) {
        let user = await jwt.verify(token);
        data.infoUser = user.data;
        
    } else {
        data.infoUser = undefined;
    }

    data.listCategory           = listCategory.data;
    data.listOrders             = listOrders.data;
    data.listBestSeller         = listProductBestSell.data;
    data.listData               = listProducts.data;
    data.listProductsFindAll    = listProductsFindAll.data;
    data.listNewProducts        = listNewProducts.data

    return res.render(view, data);
}
exports.renderToView = renderToView;