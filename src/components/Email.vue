<template>
  <div class="card">
    <div class="card-body">

      <form @submit.prevent="submitForm">
        <input class="form-control" type="email" v-model="this.state.editable.email" placeholder="Enter your email"
          required />
        <button class="btn btn-primary" type="submit">Subscribe</button>
      </form>
      <p v-if="this.state.editable.message">{{ this.state.editable.message }}</p>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      editable: {}
    })
    return {
      state,
      async submitForm() {
        try {
          // const response = await axios.post('/path-to-your-backend-endpoint', { email: this.email });
          state.editable.message = 'Thank you for subscribing!';
          state.editable.email = ''; // Clear the input field
        } catch (error) {
          state.editable.message = 'There was an error, please try again.';
        }
      }
    };
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

input,
button {
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
}

p {
  color: green;
  text-align: center;
}
</style>