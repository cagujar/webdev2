const router = require('express').Router();

const User = require('../models/user-model');
const authCheck = (req, res, next)=>{
    console.log("*************************");
    console.log(req.user);
    if(!req.user){
        // User is not logged in
        res.redirect('/auth/login');
    }
    else{
        // User is logged in
        next();
    }
}
router.get('/emp',authCheck,(req, res)=>{
    User.query(`select row_to_json(employees)  from "AGUJAR_JSON_HR".employees`,(err,res1)=>{
        if(err){
            console.log(err);
        }else{   
            console.log(res1.rows)  
            res.render('employee',{test: res1.rows, user: req.user});                   
              
        }        
    });
    
});

router.get('/dept',authCheck,(req, res)=>{
    User.query(`select row_to_json()  from "AGUJAR_JSON_HR".departments`,(err,res1)=>{
        if(err){
            console.log(err);
        }else{   
            console.log(res1.rows)  
            res.render('department',{test: res1.rows, user: req.user});                   
              
        }        
    });
    
});

router.get('/empdept',authCheck,(req, res)=>{
    User.query(`SELECT row_to_json(empdept_list) FROM "AGUJAR_JSON_HR".empdept_list() `,(err,res1)=>{
        if(err){
            console.log(err);
        }else{   
            console.log(res1.rows)  
            res.render('empdept',{test: res1.rows, user: req.user});                   
              
        }        
    });
});

router.get('/salary',authCheck,(req, res)=>{
    User.query(`SELECT row_to_json(salary_list) FROM "AGUJAR_JSON_HR".salary_list() `,(err,res1)=>{
        if(err){
            console.log(err);
        }else{   
            console.log(res1.rows)  
            res.render('salary',{test: res1.rows, user: req.user});                   
              
        }        
    });
});


module.exports = router;