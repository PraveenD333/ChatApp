import React, { useContext } from 'react'
import Sidebar from '../Components/Sidebar'
import ChatContainer from '../Components/ChatContainer.jsx'
import RightSidebar from '../Components/RightSidebar.jsx'
import { ChatContext } from '../../context/ChatContext.jsx'

const HomePage = () => {
 
  const {selectedUser} = useContext(ChatContext)

  return (
    <div className="border w-full h-screen sm:px-[10%] sm:py-[3%]">
      <div className={`backdrop-blur-xl border-2 border-gray-500 rounded-2xl overflow-hidden
      h-[100%] grid grid-cols-1 relative 
      ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':'md:grid-cols-2'}`}>
        <Sidebar/>
        <ChatContainer/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default HomePage