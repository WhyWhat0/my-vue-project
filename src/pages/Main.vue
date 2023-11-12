<template>
    <form @submit.prevent>
        <my-button
            class="fa fa-paper-plane"
            style="align-self: flex-end;"
            @click.stop="showDialog">
            <slot></slot>
        </my-button>
    </form>
    <div>
        <PostTGForm v-model:show="dialogVisible"></PostTGForm>
    </div>
</template>
<script>
import PostTGForm from "@/components/PostTGForm"

export default {
    components: { PostTGForm },
    data() {
        return {
            dialogVisible: false,
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
</style>