const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./database.js');

app.use(cors());
app.use(express.json());

//create a link
app.post('/todo', async(req, res)=>{
    try{
        const { description } = req.body;
        const newDesc = await pool.query(
            "INSERT INTO links(description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newDesc.rows[0]);
    } catch(err){
        console.log(err.message);
    }
});

//get all links
app.get('/todo', async(req, res)=>{
    try {
        const allLinks = await pool.query("SELECT * FROM links");
        res.json(allLinks.rows)     
        
    } catch (error) {
        console.log(err.message);
    }
});

//delete a links
app.delete('/todo/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const link = await pool.query("DELETE FROM links WHERE link_id = $1",
        [id]
        )
        res.json("the link was deleted.")
    } catch (error) {
        console.log(err.message);
    }
})

app.listen(5000, ()=>{
    console.log("Server is started on port 5000");
});