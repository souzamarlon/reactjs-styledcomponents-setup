import React, { useEffect, useState  } from 'react';
import axios from 'axios';

import { Container, Input, Button, AddUser } from './styles'


function App() {

  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState({isEdit: false, id: 0});
  const [addUsers, setAddUsers] = useState([]);


  const api = axios.create({
    baseURL: 'http://localhost:3333',
   });
 
   useEffect(()=>{
    async function getUsers(){
    
      const response = await api.get('users');
  
      const newArray = response.data.map((item) => ({
        id: response.data.indexOf(item),
        user: item
      }))
      
      setUsers(newArray);
     }
        
     getUsers();

  //  eslint-disable-next-line react-hooks/exhaustive-deps
   },[])


  function updateUser(e, id){    
    const userUpdated = users.map((item)=> {
      return item.id === id ? {id: item.id, user: e.target.value} : item;
    });
   
    return setUsers(userUpdated);
   }

   const handleInputChange = async (id) =>{     
      await api.put(`users/${id}`, { user: users[id].user });
    
   }

   const handleDelete = async(id)=>{
     
    const response = await api.delete(`users/${id}`);

    const newArray = response.data.map((item) => ({
        id: response.data.indexOf(item),
        user: item
      }));

    setUsers(newArray)
   }

   async function handleAddUser(){

    const response = await api.post('/users', { user: addUsers})

    const newArray = response.data.map((item) => ({
      id: response.data.indexOf(item),
      user: item
    }));


  setUsers(newArray)

   }


  return (    
      <Container>   
         {users.map((item)=>(
               <li key={item.id}>                         
                            <Input value={item.user} onChange={(e)=> updateUser(e, item.id)} disabled={edit.isEdit && edit.id === item.id ? false : true}/>
                            <Button onClick={()=> handleInputChange(item.id)} style={{display: edit.isEdit && edit.id === item.id ?  null : 'none'}} backgroundColor={'#C0F9B6'}>Submit</Button>
                            <Button onClick={()=> setEdit({isEdit: !edit.isEdit, id: item.id })} backgroundColor={'#87B6FD'}>Edit</Button>
                            <Button onClick={()=> handleDelete(item.id)} backgroundColor={'#FA6C6C'}>Delete</Button>                       
                </li>
            ))}

            <AddUser>
            <Input onChange={(e)=> setAddUsers(e.target.value)} placeholder="Type the user name..."/>
            <Button onClick={()=> handleAddUser()} backgroundColor={'#C0F9B6'}>Add</Button>                       
            </AddUser>              

      </Container>
  );
}

export default App;
