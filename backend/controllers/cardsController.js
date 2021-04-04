const Card = require("../models/card");
const User = require("../models/user");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");

const getCards = (req, res, next) => {
  return Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};

const getSingleCard = (req, res, next) => {
  return Card.findById({ _id: req.params.id })
    .then((card) => {
      if (!card) throw new NotFoundError("Card Not Found");
      return res.status(200).send(card);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  return User.findById({ _id: req.user._id })
    .then((owner) => {
      Card.create({
        name,
        link,
        owner,
      })
        .then((card) => res.status(200).send(card))
        .catch(next);
    })
    .catch(next);
};

const deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) throw new NotFoundError("Card Not Found");
      else if (!card.owner._id === req.user._id) {
        throw new UnauthorizedError("Not authorized to delete this card");
      } else {
        Card.findByIdAndDelete({ _id: req.params.cardId })
          .then(() => {
            res.status(200).send({ message: "Succesfully Deleted" });
          })
          .catch(next);
      }
    })
    .catch(next);
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) throw new NotFoundError("Card Not Found");
      res.status(200).send(card);
    })
    .catch(next);
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) throw new NotFoundError("Card Not Found");
      res.status(200).send(card);
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  getSingleCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
