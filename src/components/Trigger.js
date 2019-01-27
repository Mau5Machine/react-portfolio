import React from 'react';

const Trigger = (props) => {
    return (
        <div>
            <button
                onClick={props.handleSubmit}
                className="btn waves-effect waves-light"
            >
                Trigger Modal
            </button>
        </div>
    );
};

export default Trigger;