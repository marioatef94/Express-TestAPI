const db = require('./DB-Services');

async function getAll(){
    try{
        const query = "SELECT * FROM post";
        const response = await new Promise((resolve,reject)=>{
            db.query(query,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}

async function getById(id){
    try{
        const query = "SELECT * FROM post WHERE id = ?";
        const response = await new Promise((resolve,reject)=>{
            db.query(query,id,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        console.log(response);
        return response;
    }catch(err){throw new Error(err.message);}
}

async function addNewPost(comment,userId){
    try{
        const query = "INSERT INTO post (comment,user_id) VALUES (?,?);";
        const response = await new Promise((resolve,reject)=>{
            db.query(query, [comment,userId] ,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}

async function deletePost(id){
    try{
        const query = "DELETE FROM post WHERE id = ?";
        const response = await new Promise((resolve,reject)=>{
            db.query(query,id,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}


module.exports = {
    getAll,
    getById,
    addNewPost,
    deletePost
}