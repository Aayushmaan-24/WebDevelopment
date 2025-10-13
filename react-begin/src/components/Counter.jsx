import { useState } from "react";

function Counter() {
    const [user, setUser] = useState({name: "Alex", age: 19})
    
    return (
        <div>
            <h1>Counter : {user.name} {user.age}</h1>
            <button onClick={() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    age: prevUser.age + 1,
                }));
            }}>
                Increment
            </button>
            <button onClick={() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    age: prevUser.age - 1,
                }));
            }}>
                Decrement
            </button>
            <button onClick={() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    age: 19
                }));
            }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;