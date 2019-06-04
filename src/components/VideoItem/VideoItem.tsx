import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { SearchResult } from 'src/states/SearchListResponse';
import Typography from '@material-ui/core/Typography';

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

type VideoItemOwnProps = {
  item: SearchResult;
};
type Props = VideoItemOwnProps & WithStyles<typeof styles>;

const VideoItem: React.FC<Props> = props => {
  const { classes, item } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.actionArea}
        href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
        target='_blank'
      >
        <img
          src={item.snippet.thumbnails.medium.url}
          alt={item.snippet.title}
          style={{ maxWidth: 320, Height: 180 }}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h1'>
            {item.snippet.title}
          </Typography>
          <Typography variant='subtitle1'>{item.snippet.channelTitle}</Typography>
          <Typography component='p'>{item.snippet.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(VideoItem);
