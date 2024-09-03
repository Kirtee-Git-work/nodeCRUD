import express from 'express'

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

export default router;