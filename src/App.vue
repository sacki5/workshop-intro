<template>
  <div id="app">
    <message
      default-message="Default"
      @add:message="addMessage"
    />
    <list :items="messages" />
  </div>
</template>

<script>
import message from './components/message.vue';
import list from './components/list.vue';

export default {
  name: 'App',
  components: {
    message,
    list,
  },
  data() {
    return {
      messages: [],
    };
  },

  methods: {
    addMessage(payload) {
      this.messages.push(payload);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
