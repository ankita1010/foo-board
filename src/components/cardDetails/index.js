import { CardsDetailsComponent } from './CardsDetails';
import { connect } from 'react-redux';
import {
	editCardDetails
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
		editCardDetails
	}
)(CardsDetailsComponent);
