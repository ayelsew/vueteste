<template>
  <v-list three-line>
    <template v-for="(p, index) in sortedPersonagens">
      <v-divider :key="index"></v-divider>

      <v-list-item :key="p.name">
        <v-list-item-action>
          <v-checkbox color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-html="p.name"></v-list-item-title>
          <v-list-item-subtitle v-html="p.name"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    apiURL() {
      return this.$store.state.apiswurl;
    },
    sortedPersonagens() {
      return this.$store.getters.sortPersonagens;
    }
  },
  methods: {
    addSelected(index) {
      this.selectedPersonagens.push(index);
    },
    getPersonagens() {
      fetch(this.apiURL + "people", {
        method: "get"
      })
        .then(async res => {
          if (res.status === 200) {
            const data = await res.json();
            this.$store.dispatch("setPersonagens", data.results);
          } else {
            return Promise.reject(res);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.getPersonagens();
  }
};
</script>
