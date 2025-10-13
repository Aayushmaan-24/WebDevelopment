function Todo(props) {

    function handleClick() {
        console.log('Clicked')
    }

    return  (
        <div className="todo-item">
            <h2>{props.task}</h2>
            <button onClick={() => {
                props.togglePopup();
            }}>Done</button>
        </div>
    )
}

export default Todo;