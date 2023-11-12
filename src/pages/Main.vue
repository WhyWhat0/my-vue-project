<template>
    <div><my-button style="position: sticky;" @click="showDialog">
            <slot>Нажмите сюда</slot>
        </my-button>
    </div>
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
<style scoped></style>