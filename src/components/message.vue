<template>
  <div id="message">
    <input v-model="message">
    <button @click="submit(message)">
      Submit
    </button>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    defaultMessage: { type: String, default: '' },
  },
  data() {
    return {
      message: this.defaultMessage,
    };
  },
  methods: {
    submit(message) {
      this.$emit('add:message', message);
    },
  },
};
</script>
