function Popup(props) {

    function YesClicked() {
        console.log('Yes clicked')
    }

    function NoClicked() {
        console.log('No clicked')
    }

    return (
        <>
            <div className="popup">
                <p>{props.text}</p>
                <div className="popup-buttons">
                    <button className="popup-button" onClick={() => {props.closePopup()}}>Yes</button>
                    <button className="popup-button popup-button-no" onClick={() => {props.closePopup()}}>No</button>
                </div>
            </div>
            <div className="backdrop" onClick={() => props.closePopup()}></div>
        </>
    );
}

export default Popup;