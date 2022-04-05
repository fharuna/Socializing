const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// user creation
router.route("/").get(getAllUsers).post(createUser);

// user updates and delete
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Add/delete friends
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
