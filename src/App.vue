<template>
  <v-app>
    <v-main>
      <div class="main-container">
        <div class="form">
          <v-text-field v-model="xValues" label="X-values"></v-text-field>
          <v-text-field v-model="yValues" label="Y-values"></v-text-field>
          <v-text-field v-model="intX" label="Interpolation X"></v-text-field>
        </div>
        <div class="result-field">
          <li v-for="str in result" :key="str">
            {{ str }}
          </li>
        </div>
        <div class="show-result-btns">
          <v-btn elevation="3" @click="setResult">Show result</v-btn>
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
    xValues: "",
    yValues: "",
    intX: "",
    result: [],
    defaultData,
  }),
  mounted() {
    this.setDefaultResult();
  },
  methods: {
    setResult() {
      const xValues = this.xValues
        .trim()
        .split(" ")
        .map((el) => parseFloat(el, 10));
      const yValues = this.yValues
        .trim()
        .split(" ")
        .map((el) => parseFloat(el, 10));
      const x = parseFloat(this.intX, 10);
      this.setResultStr(xValues, yValues, x);
    },
    setDefaultResult() {
      const { X_VALUES, Y_VALUES, INTERPOLATION_X } = defaultData;
      this.setResultStr(X_VALUES, Y_VALUES, INTERPOLATION_X);
      this.xValues = "";
      this.yValues = "";
      this.intX = "";
    },
    setResultStr(X_VALUES, Y_VALUES, INTERPOLATION_X) {
      let result = [];

      for (let i = 0; i < 5; i++) {
        const interpolationResult = interpolate(
          X_VALUES,
          Y_VALUES,
          i,
          INTERPOLATION_X
        );

        if (typeof interpolationResult === "string") {
          result.push(interpolationResult);
          break;
        }

        result.push(`Результат при n=${i}: \
          ${interpolationResult}`);
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
