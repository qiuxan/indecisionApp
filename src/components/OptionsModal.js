import React from "react";
import Modal from "react-modal"

const OptionModal = (props) => {
    return (
        <div>
            <Modal
                isOpen={!!props.selectedOption}
                contentLabel="Selected option"
                onRequestClose={props.handleClearSelectedOption}
                closeTimeoutMS={200}
                className="modal"
            >
                <h3 className="modal__title">Selected Option</h3>
                {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
                <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
            </Modal >

        </div >
    )
}

export default OptionModal;