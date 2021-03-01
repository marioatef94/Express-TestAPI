const db = require('./DB-Services');

async function getAll(){
    try{
        const query = "SELECT * FROM user";
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
        const query = "SELECT * FROM user WHERE id = ?";
        const response = await new Promise((resolve,reject)=>{
            db.query(query,id,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}

async function addNewUser(firstName,lastName,email){
    try{
        const query = "INSERT INTO user (first_name,last_name,email) VALUES (?,?,?);";
        const response = await new Promise((resolve,reject)=>{
            db.query(query, [firstName,lastName,email] ,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}

async function getPosts(userId){
    try{
       const query = "SELECT * FROM post WHERE user_id = ?";
        const response = await new Promise((resolve,reject)=>{
            db.query(query, [userId] ,(err,result)=>{
                if(err){reject(new Error(err.message));}
                resolve(result);
            });
        })
        return response;
    }catch(err){throw new Error(err.message);}
}

async function deleteUser(userId){
    try{
        const query = "DELETE FROM user WHERE id = ?";
        const response = await new Promise((resolve,reject)=>{
            db.query(query,userId,(err,result)=>{
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
    addNewUser,
    deleteUser,
    getPosts
}
