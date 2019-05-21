import React from "react";
import VideoListProps from "./VideoListProps";
export default class VideoList extends React.Component<VideoListProps> {
  public render() {
    const { searchListResponse } = this.props;
    return (
      <ul>
        {searchListResponse.items.map(item => (
          <li key={item.id.videoId}>
            <p>{item.snippet.title}</p>
          </li>
        ))}
      </ul>
    );
  }
}
