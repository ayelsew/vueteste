<template>
  <v-list>
    <template v-if="sortedPersonagens.length === 0">
      <v-progress-linear indeterminate color="cyan"></v-progress-linear>CARREGANDO
    </template>
    <template v-for="(p, index) in sortedPersonagens">
      <v-divider :key="index"></v-divider>

      <v-list-item :key="p.name">
        <v-list-item-action>
          <v-checkbox :value="p.selected" @change="setSelected(index,p.selected)"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="p.eye_color+'--text'" v-html="p.name"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            :hidden="!p.selected"
            fab
            depressed
            small
            color="transparent"
            @click="rmPersonagemByIndex(index)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "Lista",
  computed: {
    apiURL() {
      return this.$store.state.apiswurl;
    },
    sortedPersonagens() {
      return this.$store.getters.sortPersonagens;
    }
  },
  methods: {
    rmPersonagemByIndex(index) {
      this.$store.dispatch("rmPersonagenByIndex", [index]);
    },
    setSelected(index, selected) {
      this.$store.dispatch("setSelectedPersonagem", {
        index,
        status: !selected
      });
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
  },
  data: () => ({
    active: false
  })
};
</script>
