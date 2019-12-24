import {Main} from './components';
import { connect } from 'react-redux';
import { addNewBoard, updateFooBoardState } from './actions'
import './App.scss';

const mapStateToProps = (state) => {
	const { boards, forms } = state;
	return ({
		...boards,
		...forms
	});
};
export default connect(mapStateToProps,
	{ addNewBoard, updateFooBoardState }
)(Main);