import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as loginActions from '../js/actions/loginActions';
import * as types from '../js/actions/actionTypes';
import nock from 'nock';
//nock.recorder.rec();

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('loginActions.testSignupCode', () => {
  it('should not give an error if correct sign in code is given', (done) => {
    const store = mockStore({})
    store.dispatch(loginActions.testSignupCode("3128", ()=>{
      done();
    }));
  })
})