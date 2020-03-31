<template>
  <div id="googleLogin">
    <button @click="callback()">{{ name }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class LoginForm extends Vue {
  @Prop(String) readonly name: string | undefined

  @Prop(Function) readonly callback: Function | undefined
}
</script>
