
<template>
    <div v-if="show" @click="hideDialog">
        <div @click.stop class="chat">
            <div class="chat-header">
                <div class="chat-header-name-date">
                    <div class="chat-header-name">ChatGPT</div>
                    <div class="chat-header-date ">{{ myDate() }}
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
import { mapState } from "vuex"
export default {
    components: { PostMessages, PostCreateForm },
    name: 'post-tg-form',
    data() {
        return {
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapState({
            messages: state => state.messages,
        }),
    },
    methods: {
        goToBot() {
            window.open('https://t.me/pancake1953bot')
        },
        hideDialog() {
            this.$emit('update:show', false)
        },
        createMessage(message) {
            if (message.text) {
                this.messages.push(message);
            }

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
</style>