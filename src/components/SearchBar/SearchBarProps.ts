import styles from './SearchBarStyle';
import { WithStyles } from '@material-ui/core';

export type SearchBarDispatchProps = {
  searchVideos: (q: string) => void;
};

type SearchBarProps = SearchBarDispatchProps & WithStyles<typeof styles>;
export default SearchBarProps;
