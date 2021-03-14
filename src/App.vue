<template>
  <v-app>
    <v-main>
      <div class="main-container">
        <div class="form">
          <v-text-field label="X-values"></v-text-field>
          <v-text-field label="Y-values"></v-text-field>
          <v-text-field label="Interpolation X"></v-text-field>
        </div>
        <div class="result-field">
          <li v-for="str in result" :key="str">
            {{ str }}
          </li>
        </div>
        <div class="show-result-btns">
          <v-btn elevation="3">Show result</v-btn>
          <v-btn elevation="3" @click="setDefaultResult"
            >Show default result</v-btn
          >
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import defaultData from "./utils/data";
import interpolate from "./utils/interpolate";
export default {
  name: "App",
  components: {},
  data: () => ({
    result: [],
    defaultData,
  }),
  mounted() {
    this.setDefaultResult();
  },
  methods: {
    setDefaultResult() {
      const { X_VALUES, Y_VALUES, INTERPOLATION_X } = defaultData;
      this.setResultStr(X_VALUES, Y_VALUES, INTERPOLATION_X);
    },
    setResultStr(X_VALUES, Y_VALUES, INTERPOLATION_X) {
      let result = [];

      for (let i = 0; i < 5; i++) {
        result.push(`Результат при n=${i}: \
          ${interpolate(X_VALUES, Y_VALUES, i, INTERPOLATION_X)}`);
      }
      this.result = result;
    },
  },
};
</script>

<style scoped>
.form {
  width: 50%;
  padding: 20px;
}

.result-field {
  width: 50%;
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
