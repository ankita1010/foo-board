import { CardsDetailsComponent } from './CardsDetails';
import { connect } from 'react-redux';
import {
	editCardDetails,
	deleteCard
} from '../../actions';

const mapStateToProps = (state) => {
	const {
		cards,
	} = state;
	return ({
		...cards
	});
}
export const CardsDetails = connect(
	mapStateToProps,
	{
		editCardDetails,
		deleteCard
	}
)(CardsDetailsComponent);
