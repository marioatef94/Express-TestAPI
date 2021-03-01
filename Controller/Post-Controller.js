const services = require("../Services/Post-Services");


// Get All Posts...
exports.post_list = async function(req,res,next){
    try{
        const response = services.getAll()
                        .then((data)=>{
                            if(data.length>0){res.send(data);}
                            else{res.json({message: "No Available data to show",documentation_url:req.originalUrl})}
                        })
    }catch(error){next(),()=>{res.sendStatus(500)};}
}; 


// Get Post Details By Id
exports.post_details = async function(req,res,next){
    try{
        const response = services.getById(req.params.id)
                                .then((data)=>{
                                    if(data.length>0){res.send(data[0]);}
                                    else{res.json({message: `Post Not Found With ID ${req.params.id}`,documentation_url:req.originalUrl});}
                                });
    }catch(error){next(),()=>{res.sendStatus(404)};}
}

// Add New Post With User ID
exports.add_post = async function(req,res,next){
    try{
        const response = services.addNewPost(req.body.comment,req.body.userId)
                                .then((data)=>{
                                    if(data.insertId){
                                        res.json({id:data.insertId});}
                                    })
    }catch(error){next(),()=>{res.sendStatus(404)};}    
}

// Delete Post
exports.delete_post = async function(req,res,next){
    try{
        const response = services.deletePost(req.params.id)
                                .then((data)=>{
                                    if(data.affectedRows>0){
                                        res.json({message: "Object has been deleted successfully"});}
                                    else{res.json({message : ` Not Found Post With ID : ${req.params.id} `})}}
                                )
    }catch(error){next(),()=>{res.sendStatus(404)};}
}