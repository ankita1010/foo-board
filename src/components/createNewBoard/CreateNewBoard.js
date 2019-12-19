import React from 'react';
import {TextBox} from '../forms/';
import {newFooBoardFormConfig} from '../../constants/configs';
export const CreateNewBoardComponent = (props) => {
    const {
        updateFormState,
        initFormState,
        formKey,
        fooBoardName
    } = props;
    const onInputChange = (event) => {
        const {value, dataset} = event.target;
        updateFormState(dataset.key, value)
    }
    return (
        <div>
            <h4>Your Foo Boards</h4>
            {
                formKey === "newFooBoard" ?
                <TextBox
                    value={fooBoardName}
                    handleOnChange={onInputChange}
                    formName={'fooBoardName'}
                    formLabel={'Board Name:'}
                />
                : 
                <div>
                    <p>
                        It seems like you have not create any boards yet!
                    </p>
                <button
                    onClick={() => initFormState(newFooBoardFormConfig)}
                >
                    Create boards
                </button>
                </div>
            }
        </div>
    );
}