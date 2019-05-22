import React from 'react';
import VideoListProps from './VideoListProps';
import VideoItem from '../VideoItem/VideoItem';

export default class VideoList extends React.Component<VideoListProps> {
  public render() {
    const { searchListResponse } = this.props;
    return (
      <div>
        {searchListResponse.items.length > 0 &&
          searchListResponse.items.map((item, index) => <VideoItem key={index} item={item} />)}
      </div>
    );
  }
}
