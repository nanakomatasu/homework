<template>
  <div class="my-tag" @dblclick="open">
    <input
      class="input"
      type="text"
      placeholder="输入标签"
      v-if="edit"
      v-model="innerTag"
      v-focus
      @blur="close"
      @keydown.enter="close"
      />
      <div class="text" v-else>{{tag}}</div>
  </div>
</template>

<script>
  export default {
    name: 'VueBaseMyTag',
    props: {
      tag: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        edit: false,
        innerTag: ''
      };
    },
    directives: {
      focus: {
        inserted (el) {
          el.focus()
        }
      }
    },
    methods: {
      open() {
        this.edit = true;
        this.innerTag = this.tag
      },
      close() {
        this.edit = false;
        this.$emit('update:tag',this.innerTag)
      }
    }
  };
</script>

<style lang="less" scoped>
  .my-tag {
    cursor: pointer;
    .input {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
      &::placeholder {
        color: #666;
      }
    }
  }
</style>