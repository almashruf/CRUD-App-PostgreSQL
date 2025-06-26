import express from 'express';

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Get all employe details');
})

router.post('/', (req,res)=>{
    res.send('add all employe details');
})

router.get('/:id', (req,res)=>{
    res.send('Get specific employe details');
})

router.delete('/:id', (req,res)=>{
    res.send('delete specific employe details');
})

router.put('/:id', (req,res)=>{
    res.send('update specific employe details');
})


export default router;