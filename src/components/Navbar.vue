<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button style="margin-left: 20px" @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')">Еще посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/store')">Тут тоже</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/composition')">тут еще что-то</my-button>
      <button
        @submit.prevent
        class="fa fa-paper-plane btn circle"
        style="margin-left: 20px; font-size: 17px; border-radius: 50%;"
        @click.stop="showDialog">
        <slot></slot>
      </button>
      <div>
        <Transition>
          <PostTGForm v-model:show="dialogVisible"></PostTGForm>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
import PostTGForm from "@/components/PostTGForm"

export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  components: { MyButton, PostTGForm },
  methods: {
    showDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
  },
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
