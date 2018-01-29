import CategorySagas from './category';
import PostSaga from './post';
import LoggerSaga from './logger';

const sagas = [
    ...CategorySagas,
    ...PostSaga,
    ...LoggerSaga,
];

export default function initialize(runSaga) {
    sagas.map(runSaga);
}