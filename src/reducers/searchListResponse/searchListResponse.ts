import SearchListResponse from '../../states/SearchListResponse';
import VideoActionType from '../../actions/Video/VideoActionType';
import VideoAction from '../../actions/Video/VideoAction';

const initialState: SearchListResponse = {
  kind: '',
  etag: '',
  nextPageToken: '',
  regionCode: '',
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
  items: [],
};

const searchListResponse = (state: SearchListResponse = initialState, action: VideoAction): SearchListResponse => {
  switch (action.type) {
    case VideoActionType.SEARCH_VIDEOS_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
      };
    case VideoActionType.SEARCH_VIDEOS_FAILED:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default searchListResponse;
