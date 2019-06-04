import VideoActionType from './VideoActionType';
import SearchListResponse from 'src/states/SearchListResponse';
import { createAsyncAction } from 'typesafe-actions';

export const searchVideos = createAsyncAction(
  VideoActionType.SEARCH_VIDEOS_REQUEST,
  VideoActionType.SEARCH_VIDEOS_SUCCEEDED,
  VideoActionType.SEARCH_VIDEOS_FAILED
)<string, SearchListResponse, Error>();
