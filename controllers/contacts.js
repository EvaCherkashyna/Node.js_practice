const { Contact } = require('../models/contact');

const { HttpError, ctrlWrapper } = require("../helpers")


const getAll = async (req, res, next) => {
  const result = await Contact.find();
  res.json(result);
}
const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not Found")
  }
  res.json(result);
}

async function add(req, res, next) {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
}

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
  if (!result) {
    throw HttpError(404, "Not Found")
  }
  res.status(200).json(result);

}
const updateFavoriteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
  if (!result) {
    throw HttpError(404, "Not Found")
  }
  res.status(200).json(result);

}

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "NotFound")
  }
  res.json(result);

}
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
  updateFavoriteById: ctrlWrapper(updateFavoriteById)
}