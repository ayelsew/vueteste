<template>
  <v-app>
    <v-app-bar app color="#33333" dark>
      <div class="d-flex align-center">
        StarWars
      </div>

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

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
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
