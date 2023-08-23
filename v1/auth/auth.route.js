const express = require("express");
const router = express.Router();
const authRouter = require("./auth.controller");
router.route("/").get(authRouter.getAuth).post(authRouter.saveAuth);

//  * if has an id
router
  .route("/:id")
  .get(authRouter.getAuthId)
  .put(authRouter.updateAuth)
  .delete(authRouter.deleteAuth);
module.exports = router;

/**
 * * Response Structure
 * @ if success
{
    status: "success",
    message: "Auth successfully [get | saved | update | delete]",
    data: result (actual data)
}
 * @ if failed
{
    status: String,
    message: err.message,
}
 * */
