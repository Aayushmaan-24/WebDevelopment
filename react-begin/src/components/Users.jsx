function Users({ name, username, id }) {
    return (
        <div style={{border: "1px solid black", margin: "5px" , padding: "5px"}}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{id}</div>
        </div>
    )
}

export default Users