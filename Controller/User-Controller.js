const services = require("../Services/User-Services");


// Get All Users...
exports.user_list = async function(req,res,next){
    try{
        const response = services.getAll()
                        .then((data)=>{
                            if(data.length>0){res.send(data);}
                            else{res.json({message: "No Available data to show",documentation_url:req.originalUrl})}
                        })
    }catch(error){next(),()=>{res.sendStatus(500)};}
}; 

// Get User Details By Id
exports.user_details = async function(req,res,next){
    try{
        const response = services.getById(req.params.id)
                            .then((data)=>{
                                if(data.length>0){res.send(data);}
                                 else{res.json({message: `Post Not Found With ID ${req.params.id}`,documentation_url:req.originalUrl})}
                            })
    }catch(error){next(),()=>{res.sendStatus(404)};}
}

// Get User Posts
exports.user_posts = async function(req,res,next){
    try{
        const response = services.getPosts(req.params.id)
                            .then((data)=>{
                                if(data.length>0){res.send(data);}
                                 else{res.json({message: `No Posts Found For User With  ID : ${req.params.id}`,documentation_url:req.originalUrl})}
                            })
    }catch(error){next(),()=>{res.sendStatus(404)};}
}

// Add New User
exports.add_user = async function(req,res,next){
    try{
        const response = services.addNewUser(req.body.firstName,req.body.lastName,req.body.email)
                                .then((data)=>{
                                    if(data.insertId){
                                        res.json({id:data.insertId});}
                                    })
    }catch(error){next(),()=>{res.sendStatus(404)};}    
}

// Delete User
exports.delete_user = async function(req,res,next){
    try{
        const response = services.deleteUser(req.params.id)
                                .then((data)=>{
                                    if(data.affectedRows>0){
                                        res.json({message: "Object has been deleted successfully"});}
                                    else{res.json({message : ` Not Found Object With ID : ${req.params.id} `})}}
                                )
    }catch(error){next(),()=>{res.sendStatus(404)};}
}