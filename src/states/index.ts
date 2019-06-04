import { StateType } from 'typesafe-actions';
import rootReducer from 'src/reducers';

type RootState = StateType<typeof rootReducer>;

export default RootState;
