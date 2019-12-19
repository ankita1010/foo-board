import React from 'react';
export const TextBox = (props) => {
    const {
        handleOnChange,
        isDisabled,
        value,
        formLabel,
        formName
    } = props;
    return (
        <div>
            <label htmlFor={formName}>
                {formLabel}
            </label>
            <input
                onChange={handleOnChange}
                value={value}
                id={formName}
                data-key={formName}
                disabled={isDisabled}
            />
        </div>
    )
}