import { BoardDetailsComponent } from './BoardDetails';
import { connect } from 'react-redux';
import {
	updateFooBoardState,
	addNewList
} from '../../actions';

const mapStateToProps = (state) => {
	const {
		boards,
		lists,
		cards,
		forms
	} = state;
	return ({
		...boards,
		...lists,
		...cards,
		...forms,
	});
}
export const BoardDetails = connect(
	mapStateToProps,
	{
		updateFooBoardState,
		addNewList
	}
)(BoardDetailsComponent);
