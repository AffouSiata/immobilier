const express = require("express");
const controlle = require("../controller/controlle");
const  connect  = require('../Bdd/data');
const router=express.Router();



router.get('/Inscription',controlle.inserer) ;
router.post('/Inscription',controlle.insererpost)
router.get('/connexion',controlle.login) ;
router.post('/connexion',controlle.loginpost)






router.get('/',(req,res)=>{
    res.render('../view/Home')
    
});
router.get('/',(req,res)=>{
    res.render('../view/admin')
    
});

router.get('/about',(req,res)=>{
    res.render('../view/about')
    
});
module.exports=router

