import React, { useState } from 'react';
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
		handleOnCancel,
		buttonSaveLabel,
		buttonCancelLabel,
		buttonCreateLabel,
		additionalInitAction
	} = props;

	const handleShowForm = () => {
		setShowForm(true);
	};
	const handleHideForm = () => {
		setShowForm(false);
	};
	const onInputChange = (event) => {
		const { value, dataset } = event.target;
		updateFormState(dataset.key, value)
	};
	const handleAddData = () => {
		handleHideForm();
		handleOnAdd();
		initFormState({})
	};
	const handleCancel = () => {
		handleHideForm();
		handleOnCancel();
	};
	const initForm = async () => {
		await initFormState(formConfigs[type]);
		handleShowForm();
		additionalInitAction ? additionalInitAction() : '';
	};
	const renderForm = () => {
		const { [type]: currentConfig } = formConfigs;
		return (
			<div className="forms-block">
				{
					Object.entries(currentConfig).map(([key, value]) => {
						const { type, label } = value;
						switch (type) {
							case "text":
								return (
									<TextBox
										key={key}
										formName={key}
										formLabel={label}
										value={formState[key]}
										handleOnChange={onInputChange}
									/>
								);
						}
					})
				}
				<div className="save-and-cancel-btns">
					<button onClick={handleCancel}>{buttonCancelLabel || 'Cancel'}</button>
					<button onClick={handleAddData}>{buttonSaveLabel || 'Save'}</button>
				</div>
			</div>
		)
	};

	if (showForm)
		return renderForm();
	return (
		<div className="create-btn-block">
			<button
				onClick={initForm}
				className="create-btn"
			>
				{buttonCreateLabel || 'Create'}
			</button>
		</div>
	);
}