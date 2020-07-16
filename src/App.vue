<template>
  <v-app>
    <v-app-bar app color="#33333" dark>
      <div class="d-flex align-center">StarWars</div>

      <v-spacer></v-spacer>

      <v-btn
        :hidden="!hasSelectedPersonagens"
        fab
        depressed
        small
        color="transparent"
        @click="deleteSelectedPersonagens()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main-content">
      <Lista />
    </v-main>
  </v-app>
</template>

<script>
import Lista from "./components/Lista";

export default {
  name: "App",

  components: {
    Lista
  },
  computed: {
    selectedPersonagensByIndex() {
      return this.$store.getters.selectedPersonagensByIndex;
    },
    hasSelectedPersonagens() {
      return this.$store.getters.selectedPersonagensByIndex.length > 0;
    }
  },
  methods: {
    deleteSelectedPersonagens() {
      const indexArray = this.selectedPersonagensByIndex;
      this.$store.dispatch("rmPersonagenByIndex", indexArray);
    }
  },
  data: () => ({
    //
  })
};
</script>


<style >
@media (max-width: 600px) {
}

@media (min-width: 601px) and (max-width: 960px) {
}

@media (min-width: 961px) and (max-width: 1264px) {
  .main-content {
    padding-right: 14rem !important ;
    padding-left: 14rem !important ;
  }
}

@media (min-width: 1265px) and (max-width: 1904px) {
  .main-content {
    padding-right: 16rem !important ;
    padding-left: 16rem !important ;
  }
}

@media (min-width: 1905px) {
  .main-content {
    padding-right: 20rem !important ;
    padding-left: 20rem !important ;
  }
}
</style>