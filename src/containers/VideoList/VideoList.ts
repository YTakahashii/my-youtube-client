import RootState from "../../states";
import VideoList from "../../components/VideoList/VideoList";
import { VideoListConnectedProps } from "../../components/VideoList/VideoListProps";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState): VideoListConnectedProps => ({
  searchListResponse: state.searchListResponse,
});

export default connect(
  mapStateToProps,
  null
)(VideoList);
