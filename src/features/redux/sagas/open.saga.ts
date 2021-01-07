import { takeLatest, call, put } from 'redux-saga/effects'

import { openEpisodeSuccess, openEpisodeFailure } from '../actions'
import { getEpisode }  from '../../services/consumer.service'
import { actionType as Action } from '../../types'
import types from '../constants'

function* workerOpenEpisode(action: Action) {
    /** function that makes the api request (axios call) and returns a Promise for response */
    try {
        const { data } = yield call(getEpisode, action.payload);
        // dispatch action to change redux state
        yield put(openEpisodeSuccess(data));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(openEpisodeFailure(err));
        console.log(err)
    }
}


/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherOpenEpisode() {
    yield takeLatest(types.LOAD_EPISODE, workerOpenEpisode);
}