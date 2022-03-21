const express=require('express');
const app=express();
const PORT=8500;

app.use(express.static('/index.html'));

app.use(express.json());
app.use(express.text());

let Users=[];

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.get('/signIn',(req,res)=>{
    res.send(Users);
});

app.post('/signIn',(req,res)=>{
    let newUser=JSON.parse(req.body);
    console.log(newUser);
    // Users.push(newUser);
    console.log(Users);
    res.json(Users);
});

app.delete('/signIn',(req,res)=>{
    Users=[];
    res.send(Users);
})

app.patch('/signIn',(req,res)=>{
    let patchData=req.body;
    // console.log(patchData);
    for(key in patchData){
        // console.log(Users[0][key]+"**"+patchData[key]);
        Users[0][key]=patchData[key];
    }
    res.send(Users);
})

app.listen(PORT,()=>{
    console.log(`Server is listening at PORT:${PORT}...!!`);
});