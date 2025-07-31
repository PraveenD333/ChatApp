import exppress from 'express'
import { protectedRouter } from '../Middleware/auth.js'
import { getmessages, getusersidebar, markMessageAsSeen, sendmessage } from '../Controllers/message.controller.js'

const messagerouter=exppress.Router()

messagerouter.get("/users",protectedRouter,getusersidebar);
messagerouter.get("/:id",protectedRouter,getmessages);
messagerouter.put("/mark/:id",protectedRouter,markMessageAsSeen);
messagerouter.post("/send/:id",protectedRouter,sendmessage);

export default messagerouter;