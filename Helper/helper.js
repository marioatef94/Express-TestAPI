const _url = 'http://localhost:3000/'
exports._links = {
    users:{
        READ:{
            httpMethod:'GET',
            _links:{
                getAll:_url+'users/v1',
                getDetails:_url+'users/v1/id',
                getUserPosts:_url+'users/v1/id/posts',
            }
        },
        CREATE:{
            httpMethod:'POST',
            _links:{
                createUser:_url+'users/v1',
                body:'firstName - lastName - email'
            }
        },
        DELETE:{
            httpMethod:'DELETE',
            _links:{
                deleteUser:_url+'users/v1/id'
            }
        }
    },
    posts:{
        READ:{
            httpMethod:'GET',
            _links:{
                getAll:_url+'posts/v1',
                getDetails:_url+'posts/v1/id',
            }
        },
        CREATE:{
            httpMethod:'POST',
            _links:{
                createUser:_url+'posts/v1',
                body:'comment - userId'
            }
        },
        DELETE:{
            httpMethod:'DELETE',
            _links:{
                deleteUser:_url+'posts/v1/id'
            }
        }
    }
}
