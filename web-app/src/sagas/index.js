import CategoryWatcher from './watchers/category';
import CommentWatcher from './watchers/comment';
import LoggerWatcher from './watchers/logger';
import PostWatcher from './watchers/post';

const sagas = [
    ...CategoryWatcher,
    ...PostWatcher,
    ...CommentWatcher,
    ...LoggerWatcher,
];

export default function initialize(runSaga) {
    sagas.map(runSaga);
}