import { Dispatch } from 'redux';
import VideoAction from '../../actions/Video/VideoAction';
import * as VideoActionCreators from '../../actions/Video/VideoActionCreator';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SearchBarDispatchProps } from '../../components/SearchBar/SearchBarProps';

const mapDispatchToProps = (dispatch: Dispatch<VideoAction>): SearchBarDispatchProps => ({
  searchVideos: (q: string) => dispatch(VideoActionCreators.searchVideos.request(q)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
