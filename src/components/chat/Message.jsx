import React from 'react'
import InpuChat from "./InpuChat"

const Message = () => {
  return (
    <div className=' bg-red-400  w-full '> 
     <div className='  p-2 flex items-center  bg-slate-400 border-rose-200 '>
              <div class="avatar online">
                  <div class="w-8 rounded-full">
                    <img src="https://res.cloudinary.com/djrtauheh/image/upload/v1693815968/e0lw1ndmesjdbkxc70n8.png" />
                  </div>
              </div>
              <div className='mx-5'> vyshakkolloth </div>
      </div>
    <div className='bg-green-200 h-96 '> 
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div>
    </div>
      <div className=''>
        <InpuChat/>
        </div>
        
        </div>
  )
}

export default Message