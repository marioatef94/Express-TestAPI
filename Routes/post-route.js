const express = require('express')
const router = express.Router();
const postController = require("../Controller/Post-Controller")
const userMiddleWare = require("../middleware/user-middleware");

router.get('/',postController.post_list);

router.get('/:id',postController.post_details);

router.post('/',userMiddleWare.checkExistingUser,postController.add_post);

router.delete('/:id',postController.delete_post);

module.exports = router;




