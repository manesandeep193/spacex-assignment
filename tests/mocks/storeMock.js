import {createStore} from 'redux';
import {mockReducer} from './reducerMock';

export const mockStore = createStore(mockReducer);