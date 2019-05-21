import axios, { AxiosResponse } from 'axios';
import SearchListResponse from '../states/SearchListResponse';

export default class YouTubeApi {
  public async search(q: string) {
    try {
      const response: AxiosResponse<SearchListResponse> = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY, // API KEY
            part: 'snippet', // or `part:　"id"`
            q, // 検索文字列 (`q` は `q: q` の略)
            type: 'video', // 動画だけ検索結果に含む
            order: 'date', // 日付順に並べ替え
            maxResults: 20,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
