
<template>
    <div class="dialog" v-if="show" @click="hideDialog">
        <div @click.stop class="chat">
            <div class="chat-header">
                <div class="chat-header-name-date">
                    <div class="chat-header-name">ChatGPT</div>
                    <div class="chat-header-date">{{ myDate() }}
                    </div>
                </div>
                <div class="chat-header-buttons">
                    <div class="chat-header-button">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div class="chat-header-button">
                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </div>
                    <div class="chat-header-button">
                        <i class="fa fa-chevron-right" @click="goToBot"></i>
                    </div>
                </div>
            </div>

            <PostMessages :messages="messages"></PostMessages>
            <PostCreateForm @create="createMessage"></PostCreateForm>


        </div>
    </div>
</template>
<script>
import PostMessages from "@/components/PostMessages.vue"
import PostCreateForm from "@/components/PostCreateForm.vue"
export default {
    components: { PostMessages, PostCreateForm },
    name: 'post-tg-form',
    data() {
        return {
            messages: [],
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        goToBot() {
            window.open('https://t.me/pancake1953bot')
        },
        hideDialog() {
            this.$emit('update:show', false)
        },
        createMessage(message) {
            this.messages.push(message);

        },
        myDate() {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '/' + mm + '/' + yyyy;
            return formattedToday
        }

    },
    mounted() {
        const event = new Date();
        console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
        console.log(typeof Date())
    }
}
</script>
<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(197, 190, 190, 0.5);
    position: fixed;
    display: flex;
}

.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 200px;
}
</style>