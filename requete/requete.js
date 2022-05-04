
const express = require("express");
const  connect  = require("../Bdd/data");
const router = require("../Route/route");




const data =class{
    static insertion = (donnee)=>{
       let {nom,prenom,email,password,numero} = donnee;
       let requete = `INSERT INTO  inscrption (nom,prenom,email,password) VALUES(?,?,?,?);`;
       let verification  = `SELECT * FROM inscrption  WHERE email=?`;
     

        return new Promise((resolve,reject)=>{ 
            connect.query(verification,[email],function(error,resultats){
                if(resultats == ''){
                    connect.query(requete,[nom,prenom,email,password],function(error,resultat){
                        if(error)
                         { 
                            reject(error)
                            console.log("erreur d'insection");
                         }                        
                        else{
                            resolve(resultat)
                            console.log('SUCCES',resultat);
                        }
                    }) 
                }
                else{
                    // reject({message:"email existe déja"}) ;
                    reject("email existe déja") ;
                }

            })
        }
               
    )}



    static connection = (base)=>{
        return new Promise((resolve,reject)=>{
            console.log("eeeeee",base);
            let  {email,password}=base
            connect.query('SELECT * FROM inscrption WHERE email=? and password=? ', [email,password],function(error,resultat){
                  
                    if(resultat)
                    {
                        console.log("my result",resultat);
                        resolve(resultat) 

                    
                    
                    }
                    else{
                        
                        reject(error)
                    }       
            })
        })
     }



}
module.exports=data;

