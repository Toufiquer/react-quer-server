const { creteToken } = require("../../utils/jwt");
const {
  authServiceSave,
  authServiceGet,
  authServiceGetId,
  authServiceDelete,
  authServiceUpdate,
} = require("./auth.service");

/* request method:post || Save Auth || req.body */
module.exports.saveAuth = async (req, res, next) => {
  try {
    const token = creteToken(req.body.email);
    const result = await authServiceSave(req.body);
    res.status(200).send({
      status: "success",
      message: "Auth successfully saved",
      data: result,
      token,
    });
  } catch (err) {
    res.status(400).send({
      status: "Auth failed to Save",
      message: err.message,
    });
  }
};
/* request method:get || Get Auth by id || req?.params?.id */
module.exports.getAuthId = async (req, res, next) => {
  try {
    const result = await authServiceGetId(req?.params?.id);
    res.status(200).send({
      status: "success",
      message: "Auth successfully Found",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "Auth failed to Find or Nothing was found by id",
      message: err.message,
    });
  }
};
/* request method:get || Get Auth by limit, skip, page No || req.body(filterBy:{limit,skip,pageNo}) */
module.exports.getAuth = async (req, res, next) => {
  try {
    const result = await authServiceGet(req.body);
    res.status(200).send({
      status: "success",
      message: "Auth successfully Found",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status:
        "Auth failed to Find or Nothing was found by limit, skip, page No",
      message: err.message,
    });
  }
};
/* request method:put || Update Auth by id || => req.params.id, req.body */
module.exports.updateAuth = async (req, res, next) => {
  try {
    const result = await authServiceUpdate({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).send({
      status: "success",
      message: "Auth Successfully Update",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      message: "Auth Fails to Update",
      message: err.message,
    });
  }
};
/* request method:delete || Delete Auth by id || => req.params?.id */
module.exports.deleteAuth = async (req, res, next) => {
  try {
    const result = await authServiceDelete(req.params?.id);
    res.status(200).send({
      status: "success",
      message: "Auth Successfully Delete",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      message: "Auth Fails to Delete",
      message: err.message,
    });
  }
};
