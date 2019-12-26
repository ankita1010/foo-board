import { ListsDetailsComponent } from './ListsDetails';
import { connect } from 'react-redux';
import {
	addNewCard,
	deleteListById,
	moveCard,
	updateCardState
} from '../../actions';

const mapStateToProps = (state) => {
	const {
		lists,
		cards,
		forms,
		boards
	} = state;
	const {currentBoard} = boards;
	return ({
		...lists,
		...cards,
		...forms,
		currentBoard
	});
}
export const ListsDetails = connect(
	mapStateToProps,
	{
		addNewCard,
		deleteListById,
		moveCard,
		updateCardState
	}
)(ListsDetailsComponent);
