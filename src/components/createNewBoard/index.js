import {CreateNewBoardComponent} from './CreateNewBoard';
import {
    updateFormState,
    initFormState
} from '../../actions';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
	const {boards, forms} = state;
	return({
		...boards,
		...forms
	});
};
export const CreateNewBoard = connect(mapStateToProps, {
    updateFormState,
    initFormState
})(CreateNewBoardComponent);