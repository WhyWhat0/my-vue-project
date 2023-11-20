<template>
    <div class="chat-footer">
        <div class="chat-footer-item">
            <i class="fa fa-paperclip fa-flip-horizontal fa-fw" aria-hidden="true" style="font-size: 30px;"></i>
        </div>
        <div class="chat-footer-text-area" style="margin-left: 10px;">
            <form @submit.prevent>
                <textarea
                    :value="currentMessage"
                    @input="updateCurrentMessage"
                    class="message-text"
                    rows="1"
                    style="font-size: 20px;"
                    placeholder="Write a message..."
                    type="text"
                    @keydown.enter.prevent.exact="createMessage"
                    @keyup.ctrl.enter.prevent="newLine">{{ currentMessage }}
                </textarea>
            </form>

        </div>
        <div class="chat-footer-item" style="margin-right: 10px;">
            <div
                class="fa fa-paper-plane fa-fw"
                aria-hidden="true"
                @click="createMessage">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: "post-create-form",
    data() {
        return {
            message: {
                id: '',
                text: '',
                date: '',
                files: '',
            },
        }
    },
    methods: {
        ...mapMutations({
            setCurrentMessage: 'setCurrentMessage',
        }),
        updateCurrentMessage(e) {
            this.$store.commit('setCurrentMessage', e.target.value)
        },
        createMessage() {
            this.message.id = Date.now();
            this.message.date = this.$store.getters.myTime;
            this.message.text = this.currentMessage;
            this.$emit('create', this.message);
            this.$store.commit('setCurrentMessage', '')
            this.message = {
                id: '',
                text: '',
                date: '',
                files: ''
            }
        },

        newLine(e) {
            let caret = e.target.selectionStart;
            e.target.setRangeText("\n", caret, caret, "end");
            this.message.text = e.target.value;
        }
    },
    computed: {
        ...mapState({
            currentMessage: state => state.currentMessage,
        })
    },
}
</script>
<style></style>