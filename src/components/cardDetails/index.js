import { CardsDetailsComponent } from './CardsDetails';
import { connect } from 'react-redux';
import {
	editCardDetails,
	deleteCard,
	moveCard,
	updateCardState
} from '../../actions';

const mapStateToProps = (state) => {
	const {
		cards,
		lists
	} = state;
	return ({
		...cards,
		...lists
	});
}
export const CardsDetails = connect(
	mapStateToProps,
	{
		editCardDetails,
		deleteCard,
		moveCard,
		updateCardState
	}
)(CardsDetailsComponent);
