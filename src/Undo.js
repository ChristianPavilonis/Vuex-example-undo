import store from './store';

export default class Undo {

    constructor(message, duration = 10000) {
        store.commit('Undo/setMessage', message);
        store.commit('Undo/setDuration', duration);
    }

    onTimerDone(callback) {
        store.commit('Undo/setTimerDone', () => {
            callback();
            store.commit('Undo/reset');
        });

        return this;
    }

    onUndo(callback) {
        store.commit('Undo/setUndo', callback);

        return this;
    }

    start() {
        store.commit('Undo/setTimeout');
    }

    static cancel() {
        store.commit('Undo/clearTimeout');
        store.commit('Undo/reset');
    }


}