const express = require("express");
const router=express.Router();




router.get('/',(req,res)=>{
    res.render('../view/Home')
    
});
router.get('/connexion',(req,res)=>{
    res.render('../view/connexion')
    
});
router.get('/Inscription',(req,res)=>{
    res.render('../view/Inscription')
    
});
router.get('/about',(req,res)=>{
    res.render('../view/about')
    
});
module.exports=router

