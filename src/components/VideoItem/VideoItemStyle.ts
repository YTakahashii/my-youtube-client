import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      margin: theme.spacing.unit,
      maxHeight: 180,
    },
    actionArea: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
  });

export default styles;
