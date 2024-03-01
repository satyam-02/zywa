const express = require('express');
const router = express.Router();
const app=express();
const mongoose=require("mongoose");
const CardStatus=require('../models/cardStatus'); 
const { error } = require('console');
const { resolve } = require('path');


app.use(express.json)

router.route("/").get(async (req, res) => {
    try {
        console.log('I am working perfectly');
        res.status(200).json({ message: 'Success' }); // Send a JSON response to the client
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.route("/get_card_status/:cardid").post(async (req, res) => {
    try {
        const  cardid  = req.params.cardid;
        console.log('Card ID:', cardid);
        
        // Find document based on cardid
        const document = await CardStatus.find({cardid:cardid});

        console.log(document);
       
        if (!document) {
            return res.status(404).json({ error: 'Document not found' });
        }

        // If document is found, you can send it as a response
        // res.status(200).json({  document });
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
});


 


module.exports = router;