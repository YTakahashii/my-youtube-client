import RootState from 'src/states';
import VideoList from 'src/components/VideoList/VideoList';
import { VideoListConnectedProps } from 'src/components/VideoList/VideoListProps';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState): VideoListConnectedProps => ({
  searchListResponse: state.searchListResponse,
});

export default connect(
  mapStateToProps,
  null
)(VideoList);
