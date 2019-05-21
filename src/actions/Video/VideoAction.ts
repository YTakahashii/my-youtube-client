import { ActionType } from "typesafe-actions";
import * as ActionCreators from "./VideoActionCreator";

type VideoAction = ActionType<typeof ActionCreators>;

export default VideoAction;
