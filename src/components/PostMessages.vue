<template>
    <div class="chat-body">
        <div class="messages">
            <MyMessage
                v-for="message in messages"
                :message="message"
                :key="message.id">
            </MyMessage>
        </div>
    </div>
</template>
<script>
import MyMessage from './UI/MyMessage.vue';

export default {
    name: "post-messages",
    data() {
        return {};
    },
    props: {
        messages: {
            type: Array,
            required: true,
        }
    },
    components: { MyMessage }
}
</script>
<style></style>