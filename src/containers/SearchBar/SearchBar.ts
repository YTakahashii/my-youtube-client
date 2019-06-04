import { Dispatch } from 'redux';
import VideoAction from 'src/actions/Video/VideoAction';
import * as VideoActionCreators from 'src/actions/Video/VideoActionCreator';
import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar/SearchBar';
import { SearchBarDispatchProps } from 'src/components/SearchBar/SearchBarProps';

const mapDispatchToProps = (dispatch: Dispatch<VideoAction>): SearchBarDispatchProps => ({
  searchVideos: (q: string) => dispatch(VideoActionCreators.searchVideos.request(q)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
