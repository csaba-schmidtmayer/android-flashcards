import { createLogicMiddleware } from 'redux-logic';

import storageLogic from './storageLogic';

export default createLogicMiddleware([
  ...storageLogic
]);
