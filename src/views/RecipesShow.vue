<template>
  <div class="recipes-show">
    <section id="banner">
      <div class="inner">
        <h1>{{ message }}</h1>
        <h1>{{ recipe.title }}</h1>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to The show page!",
      recipe: {},
    };
  },
  created: function() {
    this.showRecipe();
  },
  methods: {
    showRecipe: function() {
      console.log("showing the recipe...");
      console.log(this.$route);
      // params[:id]
      axios.get(`/api/recipes/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.recipe = response.data;
      });
    },
    deleteRecipe: function() {
      console.log("deleting the recipe...");
      axios.delete(`/api/recipes/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.$router.push("/recipes");
      });
    },
  },
};
</script>
