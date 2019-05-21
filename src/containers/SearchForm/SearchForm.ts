import { Dispatch } from 'redux';
import VideoAction from '../../actions/Video/VideoAction';
import * as VideoActionCreators from '../../actions/Video/VideoActionCreator';
import { SearchFormDispatchProps } from '../../components/SearchForm/SearchFormProps';
import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm/SearchForm';

const mapDispatchToProps = (dispatch: Dispatch<VideoAction>): SearchFormDispatchProps => ({
  searchVideos: (q: string) => dispatch(VideoActionCreators.searchVideos.request(q)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
