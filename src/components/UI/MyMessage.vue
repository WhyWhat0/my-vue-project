<template>
    <div class="message-right">
        <div class="message-body">
            <div
                class="message-body-text textformat large-font">
                {{ message.text }}
            </div>
            <div class="message-body-date-seen">
                <div class="message-body-date">{{ message.date }}</div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'my-message',
    data() {
        return {

        }
    },
    props: {
        message: {
            type: Object,
        }
    }
}
</script>
<style></style>