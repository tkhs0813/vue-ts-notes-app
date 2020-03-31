<template>
  <div>
    <LoginForm :callback="GoogleSignIn" name="GoogleLogin" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import LoginForm from '@/components/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {
  // eslint-disable-next-line class-methods-use-this
  async GoogleSignIn() {
    await this.$nextTick();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
}
</script>
