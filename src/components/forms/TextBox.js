import React from 'react';
export const TextBox = (props) => {
    const {
        handleOnChange,
        isDisabled,
        value,
        formLabel,
        formName,
		className
    } = props;
    return (
        <div className="input-wrapper">
            <label htmlFor={formName}>
                {formLabel}
            </label>
            <input
                onChange={handleOnChange}
                value={value}
                id={formName}
                data-key={formName}
                disabled={isDisabled}
				className={className || 'foo-bar-input'}
				autoComplete="off"
            />
        </div>
    )
}