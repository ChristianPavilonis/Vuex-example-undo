<template>
    <div class="undo-wrapper" v-if="message">
        <div class="undo-inner">
            <span>
                {{ message }}
            </span>
            <button @click="undo">
                Undo
            </button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Undo         from "../Undo";

    export default {
        name: "Undo",

        computed: {
            ...mapState('Undo', {
                message: state => state.message,
            }),
        },

        methods: {
            undo() {
                Undo.cancel();
            }
        }
    }
</script>