import { useEffect, useState } from "react"
import axios from "axios"
import Users from "../components/Users.jsx";
import { Link } from "react-router-dom";


function Home ()
{
    const [ users, setUsers ] = useState([])


    async function fetchUsers() {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data)
    }

    useEffect(()=>{
        fetchUsers()
    },[]);

    return (
        <div>
            {users.length>0 ? users.map((user) => (
                <Link key={user.id} to={`/users/${user.id}`}>
                <Users id={user.id} name={user.name} username={user.username} />
                </Link>
            )) : <h1>fetching data</h1> }
            
        </div>

        
    )
}
export default Home