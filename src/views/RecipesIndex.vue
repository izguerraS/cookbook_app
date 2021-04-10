<template>
  <div class="home">
    <section id="banner">
      <div class="inner">
        <h2>{{ message }}</h2>
        <!-- <h1>{{ recipes }}</h1> -->
        <div v-for="recipe in recipes">
          <h1>{{ recipe.title }}</h1>
          <p>{{ recipe.directions }}</p>
          <img v-bind:src="recipe.image_url" height="200px" width="250px" />
          <hr />
        </div>
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
      message: "Recipes",
      recipes: [],
    };
  },
  created: function() {
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function() {
      console.log("in the RecipesIndex page");
      axios.get("api/recipes").then(response => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
  },
};
</script>
