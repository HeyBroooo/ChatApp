import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message';
import { db } from '../firebase';



const style = {

main: 'flex flex-col p-[10px] relative'
}

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const scroll = useRef();

    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'))
      const unsubscribe = onSnapshot(q,(querySnapshot) => {
        let messages =[]
       querySnapshot.forEach((doc) => {
      messages.push({...doc.data(), id: doc.id})
      })
    setMessages(messages)
 })
 return () => unsubscribe()
},[])
  return (
    <>
     <main className={style.main}>
        {messages && messages.map((messages) => (
             <Message key={messages.id} message={messages} />
            ))}

      
      </main>
      {/*send message component */}
      <span ref={scroll}></span>
    </>
   
  );
};

export default Chat
