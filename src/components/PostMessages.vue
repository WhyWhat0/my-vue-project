<template>
    <div class="chat-body" :style="{ height: this.$store.state.chatBodyHeight + '%' }">
        <div class="messages">
            <transition-group name="user-list">
                <MyMessage
                    v-for="message in messages"
                    :message="message"
                    :key="message.id">
                </MyMessage>
            </transition-group>

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
<style>
.user-list-item {
    display: inline-block;
    margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

.user-list-move {
    transition: transform 0.4s ease;
}
</style>