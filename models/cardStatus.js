const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    cardid: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        default: "General"
    }
});

module.exports = mongoose.model('CardStatus', CardSchema);
