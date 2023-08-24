const { authModel } = require("./auth.model");

module.exports.authServiceSave = async (data) => {
  // @ create
  console.log(data, " => Line No: 6");
  const result = await authModel.create({ ...data });
  console.log(result, " => Line No: 7");
  return result;
};
module.exports.authServiceGetId = async (id) => {
  // @ find one
  const result = await authModel.findOne({ _id: id });
  return result;
};
module.exports.authServiceGet = async (data) => {
  // @ find all
  const { limit = 10, skip = 0, pageNo = 1 } = data.body?.filterBy || {};
  const result = await authModel
    .find({})
    .limit(limit)
    .skip(skip * pageNo);
  return result;
};
module.exports.authServiceUpdate = async ({ id, data }) => {
  // @ update a auth
  const query = { _id: id };
  const update = { $set: { ...data } };
  const options = {
    new: true,
  };
  const result = await authModel.findOneAndUpdate(query, update, options);
  return result;
};
module.exports.authServiceDelete = async (id) => {
  // @ delete a auth
  const result = await authModel.deleteOne({ _id: id });
  return result;
};
