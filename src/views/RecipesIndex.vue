<template>
  <div class="recipes-index">
    <section id="banner">
      <div class="inner">
        <h2>{{ message }}</h2>
        <!-- <h1>{{ recipes }}</h1> -->
        <div v-for="recipe in recipes" class="post-preview">
          <a v-bind:href="`/recipes/${recipe.id}`">
            <h2 class="post-title">
              {{ recipe.title }}
            </h2>
            <h3 class="post-subtitle">
              {{ recipe.image_url }}
            </h3>
          </a>
          <p class="post-meta">
            Posted by
            <a href="#">{{ recipe.chef }}</a>
            on {{ recipe.created_at }}
          </p>
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
      axios.get("/api/recipes").then(response => {
        console.log(response.data);
        this.recipes = response.data;
      });
    },
  },
};
</script>
