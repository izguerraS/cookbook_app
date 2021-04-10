<template>
  <div class="home">
    <section id="banner">
      <div class="inner">
        <div class="logo"><span class="fas fa-pepper-hot fa-3x"></span></div>
        <h2>{{ message }}</h2>
        <p>
          Homepage for Cookbook App.
        </p>
      </div>
    </section>
    <!-- Wrapper -->
    <section id="wrapper">
      <!-- One -->
      <section id="one" class="wrapper spotlight style1">
        <div class="inner">
          <a href="#" class="image"><img src="images/createrecipe2.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Create Recipes</h2>
            <p>
              Show off your latest and greatest recipe! Wheter it's a salsa or a full fledged meal, The Cookbook is here
              to strengthen the newcomers and show veterans new techniques!
            </p>
            <a href="/recipes/new" class="special">Learn more</a>
          </div>
        </div>
      </section>

      <!-- Two -->
      <section id="two" class="wrapper alt spotlight style2">
        <div class="inner">
          <a href="#" class="image"><img src="images/editrecipe.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Edit Recipes</h2>
            <p>
              Edit your latest and greatest recipe! If you created the recipe, you can also delete it if you'd like to
              resubmit.
            </p>
            <a href="#" class="special">Learn more</a>
          </div>
        </div>
      </section>

      <!-- Three -->
      <section id="three" class="wrapper spotlight style3">
        <div class="inner">
          <a href="#" class="image"><img src="images/showrecipe.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Share Recipes</h2>
            <p>
              Time to show off! Show us your latest photogenic food picture!
            </p>
            <a href="#" class="special">Learn more</a>
          </div>
        </div>
      </section>

      <!-- Four -->
      <section id="four" class="wrapper alt style1">
        <div class="inner">
          <h2 class="major">Share Recipes. Keep Memories!</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce
            tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus.
            Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <section class="features">
            <article>
              <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
              <h3 class="major">Sed feugiat lorem</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
              <a href="#" class="special">Learn more</a>
            </article>
            <article>
              <a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
              <h3 class="major">Nisl placerat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
              <a href="#" class="special">Learn more</a>
            </article>
            <article>
              <a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
              <h3 class="major">Ante fermentum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
              <a href="#" class="special">Learn more</a>
            </article>
            <article>
              <a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
              <h3 class="major">Fusce consequat</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
              <a href="#" class="special">Learn more</a>
            </article>
          </section>
          <ul class="actions">
            <li><a href="#" class="button">Browse All</a></li>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome To The Cookbook Home",
    };
  },
  created: function() {},
  methods: {},
};
</script>
