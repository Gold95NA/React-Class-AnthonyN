export const Modal = (props) => {
    return (
        <div className="modal">
            <p>Did you complete this task?</p>
            <button onClick={() => props.dismissModal()}className="btn btn-highlight">Cancel</button>
            <button onClick={() => props.dismissModal()}className="btn btn-highlight">Confirm</button>
        </div>
    );
}

