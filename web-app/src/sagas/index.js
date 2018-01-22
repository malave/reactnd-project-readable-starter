import CategorySagas from './category';
import PostSaga from './post';

const sagas = [
    ...CategorySagas,
    ...PostSaga,
];

export default function initialize(runSaga) {
    sagas.map(runSaga);
}