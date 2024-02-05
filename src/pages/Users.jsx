import axios from "axios";
import { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';

const Users = () =>{

    const[users,setUsers] = useState([{
        name: '',
        username: '',
        email: '',
}]);

useEffect(()=>{
    axios({
        method:'get',
        url: 'http://localhost:8080/user/details'
    }).then(res=>{
        console.log(res.data);
        setUsers(res.data);
        console.log("users",users);
    }).catch(err=>{
        console.log(err);
    });
},[])

return(<>   
<Container>
<table class="table">
<thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
{users.map((item, index) =>
    <tr key={index}>
    {Object.entries(item).map(([key, value]) =>
        <th scope="row" field={key} header={key} key={key}>{value}</th>
    )}
    </tr>
)}
</tbody>
</table>
</Container>
    </>);
}

export default Users;