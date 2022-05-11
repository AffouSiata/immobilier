const express = require("express");
const controlle = require("../controller/controlle");
const  connect  = require('../Bdd/data');
const upload = require("../middlware/muter");
const router=express.Router();




router.get('/Inscription',controlle.inserer) ;
router.post('/Inscription',controlle.insererpost)
router.get('/connexion',controlle.login) ;
router.post('/connexion',controlle.loginpost)
router.post('/admin',upload.single("photo"),controlle.adminpost)
router.post('/autre',controlle.enregistre)





router.get('/autre/:id',(req,res)=>{
    res.render('../view/autre')
    console.log("tyuilm",req.params.id);
    
});


router.get('/',(req,res)=>{
    res.render('../view/Home')
    
});

router.get('/',(req,res)=>{
    res.render('../view/admin')
    
});

router.get('/about',(req,res)=>{
    res.render('../view/about')
    
});
router.get('/admin',(req,res)=>{
    res.render('../view/admin')
    
});
module.exports=router

