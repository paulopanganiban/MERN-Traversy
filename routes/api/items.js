const express = require('express');
const router = express.Router();

// bring item model
const Item = require('../../models/item');
// @route GET api/items
// @desc GET All items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 }) // descending
        .then(items => res.json(items));
});
// @route POST api/items
// @desc Create A Post
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});
// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id) // extract in the params
        .then(item => item.remove().then(() => res.json(
            { success: true })))
        .catch(err => res.status(404).json({ success: false }));
})
module.exports = router;