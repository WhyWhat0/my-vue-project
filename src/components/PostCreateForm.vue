<template>
    <div class="chat-footer">
        <div class="chat-footer-item">
            <i class="fa fa-paperclip fa-flip-horizontal fa-fw" aria-hidden="true" style="font-size: 25px;"></i>
        </div>
        <div class="chat-footer-text-area" style="margin-left: 10px;">
            <textarea
                id="ta"
                @submit.prevent
                :value="currentMessage"
                @input="updateCurrentMessage"
                @mouseup="calculateHeight"
                @keyup="calculateHeight"
                @onmouseup="calculateHeight"
                @onkeyup="calculateHeight"
                class="message-text"
                rows="1"
                style="font-size: 16px; line-height: 16px;"
                placeholder="Write a message..."
                type="text"
                @keydown.enter.prevent.exact="createMessage"
                @keyup.ctrl.enter.prevent="newLine">{{ currentMessage }}
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
export default {
    name: "post-create-form",
    data() {
        return {
            message: {
                id: '',
                text: '',
                date: '',
                files: '',
                isMyMessage: true,
                handlers: {
                    mouseup: this.calculateHeight,
                    keyup: this.calculateHeight,
                    onmouseup: this.calculateHeight,
                    onkeyup: this.calculateHeight,

                }
            },
        }
    },
    methods: {
        ...mapMutations({
            setCurrentMessage: 'setCurrentMessage',
        }),
        mounted() {
            this.calculateHeight();
        },
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
        },
        calculateContentHeight(ta, scanAmount) {
            var origHeight = ta.style.height,
                height = ta.offsetHeight,
                scrollHeight = ta.scrollHeight,
                overflow = ta.style.overflow;
            if (height >= scrollHeight) {
                ta.style.height = (height + scanAmount) + 'px';
                ta.style.overflow = 'hidden';
                if (scrollHeight < ta.scrollHeight) {
                    while (ta.offsetHeight >= ta.scrollHeight) {
                        ta.style.height = (height -= scanAmount) + 'px';
                    }
                    while (ta.offsetHeight < ta.scrollHeight) {
                        ta.style.height = (height++) + 'px';
                    }
                    ta.style.height = origHeight;
                    ta.style.overflow = overflow;
                    return height;
                }
            } else {
                return scrollHeight;
            }
        },
        calculateHeight() {
            var ta = document.getElementById("ta"),
                style = (window.getComputedStyle) ?
                    window.getComputedStyle(ta) : ta.currentStyle,
                taLineHeight = parseInt(style.lineHeight, 10),
                taHeight = this.calculateContentHeight(ta, taLineHeight),
                numberOfLines = Math.ceil(taHeight / taLineHeight) - 1;

            console.log(numberOfLines)
        },
    },
    computed: {
        ...mapState({
            currentMessage: state => state.currentMessage,
        })
    },
    // watch: {
    //     currentMessage() {
    //         this.calculateHeight()
    //     }
    // }
}
</script>
<style scoped>
.fa {
    font-size: small;
}
</style>