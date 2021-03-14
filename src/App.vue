<template>
  <v-app>
    <v-main>
      <div class="main-container">
        <div class="form">
          <v-text-field label="X-values"></v-text-field>
          <v-text-field label="Y-values"></v-text-field>
          <v-text-field label="Interpolation X"></v-text-field>
        </div>
        <div class="result-field">{{ resultStr }}</div>
        <div class="show-result-btns">
          <v-btn elevation="3">Show result</v-btn>
          <v-btn elevation="3">Show default result</v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    resultStr: "No result",
  }),
  methods: {},
};
</script>

<style scoped>
.form {
  width: 70%;
  padding: 20px;
}

.result-field {
  width: 30%;
  background-color: #e4d8d8;
  padding: 10px;
  color: grey;
}

.show-result-btns {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 3px solid green;
}
</style>
