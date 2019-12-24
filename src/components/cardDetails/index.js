import { CardsDetailsComponent } from './CardsDetails';
import { connect } from 'react-redux';
import {
	editCardDetails,
	deleteCard,
	moveCard
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
		moveCard
	}
)(CardsDetailsComponent);
