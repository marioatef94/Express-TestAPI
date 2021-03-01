const express = require('express')
const router = express.Router();
const userController = require("../Controller/User-Controller");
const userMiddleWare = require("../middleware/user-middleware");

router.get('/',userController.user_list);

router.get('/:id',userController.user_details);

router.get('/:id/posts',userController.user_posts);

router.post('/',userMiddleWare.checkUserParams,userController.add_user);

router.delete('/:id',userController.delete_user);


module.exports = router;


