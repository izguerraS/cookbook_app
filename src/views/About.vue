<template>
  <div class="about">
    <section id="banner">
      <div class="inner">
        <div class="logo"><span class="fas fa-pepper-hot fa-3x"></span></div>
        <h2>{{ message }}</h2>
        <p>
          About Us for Cookbook App.
        </p>
      </div>
    </section>
    <section id="wrapper">
      <section id="two" class="wrapper alt spotlight style2">
        <div class="inner">
          <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
          <div class="content">
            <h2 class="major">Edit Recipes</h2>
            <p>
              Talk "About Us" section description!
            </p>
            <a href="#" class="special">Learn more</a>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: "Welcome To The Cookbook About",
    };
  },
  created: function() {},
  methods: {},
};
</script>
