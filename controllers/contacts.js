const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const addContact = async (req, res) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').insertOne(newContact);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occured while inserting.");
    }
};

const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').replaceOne({ _id: contactId }, contact )
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occured while updating.");
    }
};

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('cse341').collection('contacts').deleteOne({ _id: contactId }, true);
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || "An error occured while updating.");
    }
};

module.exports = { getAll, getSingle, addContact, updateContact, deleteContact };