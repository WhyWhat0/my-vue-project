<template>
    <div>
        <form @submit.prevent>
            <my-button
                class="fa fa-paper-plane circle fixpos"
                style="align-self: flex-end;"
                @click.stop="showDialog">
                <slot></slot>
            </my-button>
        </form>
        <div>
            <Transition>
                <PostTGForm v-model:show="dialogVisible"></PostTGForm>
            </Transition>
        </div>
    </div>
</template>
<script>
import PostTGForm from "@/components/PostTGForm"

export default {
    components: { PostTGForm },
    data() {
        return {
            dialogVisible: false,
            image: "https://celes.club/uploads/posts/2023-03/1679426930_celes-club-p-fon-vindovs-khp-oboi-7.jpg"
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = !this.dialogVisible;
        },
    },
}
</script>
<style>
form {
    display: flex;
    flex-direction: column;
}

.image {
    background: url('https://i.imgur.com/CaFNazu.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.fixpos {
    position: fixed;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>