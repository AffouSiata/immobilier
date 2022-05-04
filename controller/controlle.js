
const express = require("express");
const { connect } = require("../Bdd/data");
const router = require("../Route/route");
const data = require('../requete/requete');






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
        

}



module.exports=controlle;
