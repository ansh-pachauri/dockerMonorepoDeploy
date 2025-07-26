import express from "express";
import prisma from "db/client";

const app = express();

app.use(express.json());

app.get('/users', async(req, res) => {

    try{
        const user =await prisma.user.findMany();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json({ err });
    }
  
});


app.post("/user", async(req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }

  try{
    const user = await prisma.user.create({
        data:{
            username,
            password
        }
    })
    if(user){
        res.status(200).json({ message: "User created successfully" });
    }

  }catch(err){
    res.status(500).json({ err });
    return
  }
  
})

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});