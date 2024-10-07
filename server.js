import express, { response } from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())




app.get('/usuarios', async (req,res) => {
  
  const user = await prisma.user.findMany()

res.status(200).json(users)

})

app.put('/usuarios/:id', async (req,res ) =>{

     
     const user = await prisma.user.update({
            where:{
              id:  req.params.id
            },
         data:{
          email: req.body.email,
          age: req.body.message,
          name: req.body.name
     }
   })

    res.status(200).json(user)

})


app.delete('/usuarios', async (req,res) => {
    await prisma.user.delete({

        where: {
            id: req.params.id
        }
    })
      res.status(200).json({ massage:"usuario deletado com sucesso!"})
})


app.listen(3000)