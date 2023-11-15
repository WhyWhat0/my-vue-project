<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
  
<script>
export default {
    name: 'my-button'
}
</script>
  
<style scoped>
.btn {
    padding: 5px;
    background: none;
    color: teal;
    border: 2px solid teal;
}

.btn:hover {
    background-color: aquamarine;
}
</style>
  