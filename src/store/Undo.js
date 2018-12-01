export default {

    namespaced: true,

    state: {
        message  : '',
        duration : null,
        timer    : null,
        timerDone: null,
        undo     : null,
    },

    mutations: {
        setMessage(state, message) {
            state.message = message;
        },

        setDuration(state, duration) {
            state.duration = duration;
        },

        setTimerDone(state, callback) {
            state.timerDone = callback;
        },

        setUndo(state, callback) {
            state.undo = callback;
        },

        setTimeout(state) {
            state.timer = setTimeout(state.timerDone, state.duration);
        },

        clearTimeout(state) {
            window.clearTimeout(state.timer);

            state.undo();
        },

        reset(state) {
            state.message = '';
            state.duration = null;
            state.timerDone = null;
            state.timer = null;
            state.undo = null;
        }

    },
}