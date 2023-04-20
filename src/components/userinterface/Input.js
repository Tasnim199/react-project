import React from "react";
const Input =React.forwardRef((props,ref) => (
    <div className="input">
        <label htmlFor={props.input.id}> {props.id}</label>
        <input ref={ref} {...props.input} />
    </div>
));
export default Input;