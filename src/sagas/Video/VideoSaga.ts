import { takeLatest, call, put } from 'redux-saga/effects';
import VideoActionType from '../../actions/Video/VideoActionType';
import YouTubeApi from '../../apis/YouTubeApi';
import * as VideoActionCreators from '../../actions/Video/VideoActionCreator';
import { PromiseGenericType } from '../../utils/TypeUtils';

const api = new YouTubeApi();

export function* searchVideosSaga(
  action: ReturnType<typeof VideoActionCreators.searchVideos.request> // PayloadAction<VideoActionType.SEARCH_VIDEOS_REQUEST, string>
) {
  const searchListResponse: PromiseGenericType<ReturnType<typeof api.search>> = yield call(api.search, action.payload);

  if (searchListResponse) {
    yield put(VideoActionCreators.searchVideos.success(searchListResponse));
  } else {
    yield put(VideoActionCreators.searchVideos.failure(new Error('searchListResponse is undefined')));
  }
}

export const videoSagas = [takeLatest(VideoActionType.SEARCH_VIDEOS_REQUEST, searchVideosSaga)];
