
const express = require("express");
const { connect } = require("../Bdd/data");
const router = require("../Route/route");
const data = require('../requete/requete');
const { request } = require("express");
const { response } = require("express");






const controlle = class{



    static inserer = (req=request,res=response)=>{
        
        res.render('../view/Inscription')
    }

    static login = (req=request,res=response)=>{
        
        res.render('../view/connexion')
    }

    

    static insererpost= (req=request,res=response)=>{
        data.insertion(req.body).then(success=>{
            res.redirect('/connexion')
        })
        .catch(error=>{
            res.render('../view/Inscription')
            console.log("mon errreur",error);
        })
       
        // console.log(req.body);  
    }
    static loginpost =(req=request,res=response)=>{
        data.connection(req.body).then(success=>{
            res.redirect('/')
        })
        .catch(error=>{
            res.render('../view/connexion')
            console.log("erreur a la connexion");
        })
    }
    static adminpost =(req=request,res=response)=>{
        data.admin(req.body,req.file).then(succes=>{
            let inser=succes.insertId;
            console.log("innn",inser);
            res.render('../view/autre')
        })
        .catch(error=>{
            console.log("errror",error);
        })
    
    } 
    static enregistre =(req=request,res=response)=>{
        let
    }

}



module.exports=controlle;
