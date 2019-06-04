import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import VideoItemProps from './VideoItemProps';
import styles from './VideoItemStyle';

const VideoItem: React.FC<VideoItemProps> = props => {
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
