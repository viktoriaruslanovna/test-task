import * as loginActionCreators from './login';
import * as contactsActionCreators from './contacts';
import * as authActionCreators from './auth';
import * as lockActionCreators from './lock';

export default {
  ...contactsActionCreators,
  ...loginActionCreators,
  ...authActionCreators,
  ...lockActionCreators,
};
