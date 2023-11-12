<template>
    <div class="main-window" v-if="show" @click.stop="hideDialog">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
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
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
}
</script>
<style>
.main-window {
    background-color: black;
    display: flex;
    flex-direction: row;
    height: calc(100vh - 20px);
    width: 90%;
    justify-content: center;
}

.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
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