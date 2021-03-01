# Express-TestAPI


# General Details (HttpMethod:GET)
* GET API Documentation : http://host:port/

# Users

* READ ( HttpMethod : GET)
  * GET All : http://host:port/users/v1
  * Get User Details : http://host:port/usrs/v1/id
  * Get User Posts : http://host:port/usrs/v1/id/posts

* CREATE (Http Method : POST)
  * CREATE User : http://host:port/users/v1 - body (firstName,lastName,email)
  
* DELETE (HttpMethod : DELETE)
  * DELETE User : http://host:port/users/v1/id
  
# Posts

* READ ( HttpMethod : GET)
  * GET All : http://host:port/posts/v1
  * Get Post Details : http://host:port/posts/v1/id
  
* CREATE (Http Method : POST)
  * CREATE POST : http://host:port/posts/v1 - body (comment,userId)

* DELETE (HttpMethod : DELETE)
  * DELETE Post : http://host:port/posts/v1/id
