import { SearchResult } from 'src/states/SearchListResponse';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './VideoItemStyle';

type VideoItemOwnProps = {
  item: SearchResult;
};

type VideoItemProps = VideoItemOwnProps & WithStyles<typeof styles>;
export default VideoItemProps;
