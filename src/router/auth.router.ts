import { Router } from "express";
import AuthController from '../controllers/auth.controller'
import { Request , Response } from "express";
const authRouter = Router() ;

const signUpHandler = async (req : Request , res : Response) =>{
  const data : any = req.body
  const response : any = await AuthController.signUpHandler(data)
  const {status} = response ;
  res.status(status).json({
    response
  })
}

const signInHandler  = async(req : Request , res : Response) =>{
  const data : any = req.body
  const response : any = await AuthController.signIpHandler(data)
  const {status} = response ;
  res.status(status).json({
    response
  })
}

const voteHandler  = async(req : Request , res : Response) =>{
  const data : any = req.body
  const response : any = await AuthController.voteHandler(data)
  const {status} = response ;
  res.status(status).json({
    response
  })
}

const getVoteListHandler  = async(req : Request , res : Response) =>{
  const data : any = req.body
  const response : any = await AuthController.getVoteListHandler(data)
  const {status} = response ;
  res.status(status).json({
    response
  })
}
authRouter.post('/sign-up' , signUpHandler)

authRouter.post('/sign-in' , signInHandler)

authRouter.post('/vote' , voteHandler)

authRouter.get('/votes' , getVoteListHandler)



export default authRouter ;