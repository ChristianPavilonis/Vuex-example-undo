<template>
    <div>
        <textarea v-model="text"></textarea>
        <button @click="clear">Clear</button>
    </div>
</template>

<script>
import Undo from '../Undo';
export default {

    data() {
        return {
            text: '',
        }
    },

    methods: {
        clear() {
            let deletedText = this.text;
            this.text = '';
            new Undo('All of your hard work was deleted.')
                .onTimerDone(() => {
                    // call an api to delete it maybe?
                })
                .onUndo(() => {
                    this.text = deletedText;
                })
                .start();
        }
    }

}
</script>