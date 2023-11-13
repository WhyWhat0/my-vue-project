<template>
    <div class="chat-footer">
        <div class="chat-footer-item">
            <i class="fa fa-paperclip fa-flip-horizontal fa-fw" aria-hidden="true"></i>
        </div>
        <div class="chat-footer-text-area"><textarea v-model="message.text" class="message-text" rows="1"
                placeholder="Write a message..."></textarea></div>
        <div class="chat-footer-item">
            <div
                class="fa fa-paper-plane fa-fw"
                aria-hidden="true"
                @click="createMessage">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "post-create-form",
    data() {
        return {
            message: {
                id: '',
                text: '',
                date: '',
                files: '',
            }

        }
    },
    methods: {
        createMessage() {
            this.message.id = Date.now();
            this.message.date = this.$store.getters.myTime;
            this.$emit('create', this.message);
            this.message = {
                id: '',
                text: '',
                date: '',
            }
        }
    }
}
</script>
<style></style>