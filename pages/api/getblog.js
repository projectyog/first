import * as fs from 'fs';

export default function handler(req,res) {
    fs.readFile('blogdata/${req.query.slug}.json','utf-8',() =>{
        if(err){
            res.status(500).json({error:"NO Such Blog Found"})
        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}