const router = require("express").Router();
let Theater = require ("../models/Theater");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const address = req.body.address;
    const contact_no = Number(req.body.contact_no);
    const email = req.body.email;

    const newTheater = new Theater({

        name,
        address,
        contact_no,
        email
    })

    newTheater.save(),then(()=>{
        res.json("Theater Added")
    }).catch((err)=>{
            console.log(err);
    })
    
})

router.route("/").get((req,res)=>{

    Theater.find().then((theaters)=>{
        res.json(theaters)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req,res)=>{
    let theaterId = req.params.id;
    const{name,address,contact_no,email }=req.body;

    const updateTheater ={

        name,
        address,
        contact_no,
        email
    }

    const update = await Theater.findByIdAndUpdate(theaterId,updateTheater)
    .then(()=>{
        res.status(200).send({status:"Theater Updates " })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
     
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let theaterId = req.params.id;

    await Theater.findByIdAndDelete(theaterId )
    .then(()=>{
        res.status(200).send({status:"Theater Deleted " })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with delete theater",error:err.message});
     
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let theaterId = req.params.id;

    const theater=await Theater.findById(theaterId )
    .then(()=>{
        res.status(200).send({status:"Theater Feteched ",theater:theater })
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with get theater",error:err.message});
     
    })
})


module.exports = router;