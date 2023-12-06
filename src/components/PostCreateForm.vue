<template>
    <div class="chat-footer" :style="{ height: this.chatFooterHeight + '%' }">
        <div class="chat-footer-item">
            <i class="fa fa-paperclip fa-flip-horizontal fa-fw" aria-hidden="true" style="font-size: 25px;"></i>
        </div>
        <div class="chat-footer-text-area" style="margin-left: 10px;">
            <textarea
                v-focus
                id="ta"
                @submit.prevent
                :value="currentMessage"
                @input="updateCurrentMessage"
                class="message-text"
                rows="1"
                style="font-size: 16px; line-height: 16px;"
                placeholder="Write a message..."
                type="text"
                @keydown.enter.prevent.exact="createMessage"
                @keydown.ctrl.enter.prevent="newLine">
                </textarea>

        </div>
        <div class="chat-footer-item" style="margin-right: 10px;">
            <div
                style="font-size: 25px;"
                class="fa fa-paper-plane fa-fw"
                aria-hidden="true"
                @click="createMessage">
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import toggleMixin from "@/mixins/toggleMixin";
export default {
    name: "post-create-form",
    mixins: [toggleMixin],
    data() {
        return {
            message: {
                id: '',
                text: '',
                date: '',
                files: '',
                isMyMessage: true,
                handlers: {
                    mouseup: "calculateHeight",
                    keyup: "calculateHeight",
                    onmouseup: "calculateHeight",
                    onkeyup: "calculateHeight",
                }
            },
        }
    },
    mounted() {
        this.changeFooterArea(1);
    },
    methods: {
        ...mapMutations({
            setCurrentMessage: 'setCurrentMessage',
            setSizeFooterArea: 'setSizeFooterArea',
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
            this.changeFooterArea(1)
            this.changeDivArea()
            this.message = {
                id: '',
                text: '',
                date: '',
                files: ''
            }
        },

        newLine(e) {
            this.changeFooterArea(this.calculateHeight() + 1)
            setTimeout(() => {
                e.target.value += '\n'
                // let caret = e.target.selectionStart;
                // e.target.setRangeText("\n", caret, caret, "end");
            }, 1);
        },
        changeFooterArea(col) {
            this.$store.commit('setSizeFooterArea', col)
        },
        changeDivArea() {
            ta.rows = this.sizeFooterArea
            this.$store.commit('setChatBodyHeight', 84 - 2 * (this.sizeFooterArea - 1))
            this.$store.commit('setChatFooterHeight', 8 + 2 * (this.sizeFooterArea - 1))
        }

    },
    computed: {
        ...mapState({
            currentMessage: state => state.currentMessage,
            sizeFooterArea: state => state.sizeFooterArea,
            chatBodyHeight: state => state.chatBodyHeight,
            chatFooterHeight: state => state.chatFooterHeight,
        })
    },
    watch: {
        currentMessage() {
            this.changeFooterArea(this.calculateHeight())
        },
        sizeFooterArea: {
            handler: function (newValue, oldValue) {
                this.changeDivArea()
            }

        }
    }
}
</script>
<style scoped>  .fa {
      font-size: small;
  }
</style>