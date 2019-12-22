import {CreateNewDataComponent} from './CreateNewData';
import {
    updateFormState,
    initFormState
} from '../../actions';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
	const {boards, forms, lists, cards} = state;
	return({
		...boards,
		...lists,
		...cards,
		formState: forms
	});
};
export const CreateNewData = connect(mapStateToProps, {
    updateFormState,
    initFormState
})(CreateNewDataComponent);