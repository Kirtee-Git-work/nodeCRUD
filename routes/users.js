import express from 'express';

import {v4 as uuidv4} from  'uuid';

const router = express.Router();

const users = [
    {
    first_Name : 'Kirtee',
    last_Name : 'Patil',
    email_ID : 'kirteepatil987@gmail.com'
    },
    {
    first_Name : 'Kia',
    last_Name : 'Patil',
    email_ID : 'Kia123@gmail.com'
    },
]

router.get('/', (req,res) =>{
    res.send(users);
})

router.post('/', (req,res) =>{
    const user  = req.body;
    users.push({...user, id :uuidv4()});

    res.send(`${user.first_Name} has been added to the Database`);
})

export default router;