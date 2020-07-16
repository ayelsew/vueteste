<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :disabled="!hasSelectedPersonagens"
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
