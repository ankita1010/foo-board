import React, { useState, useEffect, Fragment } from 'react';
import { TextBox } from '../forms';
import { formConfigs } from '../../constants/configs';
export const CreateNewDataComponent = (props) => {
    const [showForm, setShowForm] = useState(false);
    const {
        updateFormState,
        initFormState,
        formState,
        type,
        handleOnAdd,
        handleOnCancel
    } = props;
    const onInputChange = (event) => {
        const { value, dataset } = event.target;
        updateFormState(dataset.key, value)
    };
    const handleAddData = () => {
        setShowForm(false);
        handleOnAdd()
    };
    const handleCancel = () => {
        setShowForm(false);
        handleOnCancel();
    }
    const renderForm = () => {
        const { [type]: currentConfig } = formConfigs;
        return (
            <Fragment>
                {
                    Object.entries(currentConfig).map(([key, value]) => {
                        const { type, label } = value;;
                        switch (type) {
                            case "text":
                                return (
                                    <TextBox
                                        formName={key}
                                        formLabel={label}
                                        value={formState[key]}
                                        handleOnChange={onInputChange}
                                    />
                                );
                        }
                    })
                }
                <button onClick={handleAddData}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </Fragment>
        )
    };
    useEffect(() => {
        initFormState(formConfigs[type])
    }, [])
    if (showForm)
        return renderForm();
    return (
        <div>
            <button onClick={() => setShowForm(true)}>
                Create
           </button>
        </div>
    );
}