import React from 'react'



const style = {
  message: 'flex item-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full',
  name:'fixed mt-[-4rem] text-gray-600 text-xs'
}

const Message = () => {
  return (
    <div>
      <div className={style.message}>
        <p className={style.name}>Dev</p>
        <p>Im Learning React!</p>
      </div>
    </div>
  )
}

export default Message
