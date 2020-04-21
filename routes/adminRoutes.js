const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');


const todo = require('./todolist.json');
const employees = require('./employeelist.json');

const url = 'mongodb://localhost:27017';
const dbName = 'employeedb';
const client = new MongoClient(url, { useUnifiedTopology: true });

let employeedb;
let todoCollection;

(async () => {  
   
    await client.connect(); 
    employeedb = client.db(dbName);
    todoCollection = employeedb.collection('todo');

    // client.close();// close connection
})();

//router.get('/', async (req, res)=>{
    // const result = await todoCollection.insertMany(todo);
    // console.log(results)
    // res.send(result);
   // const todolist = await todoCollection.find({}).toArray();
    //res.render('admin', {
   //     todolist, 
      // employees
 //  })
   
//});   

router.get('/', async (req, res)=>{
    const todolist = await todoCollection.find({}).toArray();
   res.render('todolist',{
       todolist
    })
});
       



module.exports = router;