import reducers from './reducers';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const storageConfig = {
  key: 'root', // 必须有的
  storage, // 缓存机制
  // blacklist: ['name','age'] // reducer 里不持久化的数据,除此外均为持久化数据
}
const myPersistReducer = persistReducer(storageConfig, reducers);
const store = createStore(myPersistReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)
export default store;

// 向外暴露store对象
// export default createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
