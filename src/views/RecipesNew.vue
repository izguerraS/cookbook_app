<template>
  <div class="recipes-new">
    <section id="banner">
      <div class="inner">
        <div class="logo"><span class="fas fa-pepper-hot fa-3x"></span></div>
        <h2>{{ message }}</h2>
        <form v-on:submit.prevent="submit()">
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <br />
          <br />
          <br />
          <div class="form-group">
            <label>Title:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              required
              data-validation-required-message="Please enter a title."
              v-model="title"
            />
          </div>
          <br />
          <br />
          <div class="form-group">
            <label>Ingredients:</label>
            <textarea
              rows="5"
              class="form-control"
              placeholder="Ingredients"
              required
              data-validation-required-message="Please enter ingredients."
              v-model="ingredients"
            ></textarea>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label>Directions:</label>
            <textarea
              rows="5"
              class="form-control"
              placeholder="Directions"
              required
              data-validation-required-message="Please enter directions."
              v-model="directions"
            ></textarea>
          </div>
          <br />
          <br />
          <div class="form-group">
            <label>Prep Time:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Prep Time"
              required
              data-validation-required-message="Please enter a prep time."
              v-model="prepTime"
            />
          </div>
          <br />
          <br />
          <div class="form-group" form action="/action_page.php">
            <label>Image Url:</label>
            <input type="text" class="form-control" placeholder="MUST BEGIN WITH 'HTTPS://'" v-model="imageUrl" />
          </div>
          <br />
          <br />
          <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
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
      message: "Make a new Recipe!",
      title: "",
      ingredients: "",
      directions: "",
      prepTime: "",
      imageUrl: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        ingredients: this.ingredients,
        directions: this.directions,
        prep_time: this.prepTime,
        image_url: this.imageUrl,
      };
      console.log(params);

      axios
        .post("/api/recipes", params)
        .then(response => {
          this.$router.push("/recipes");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
