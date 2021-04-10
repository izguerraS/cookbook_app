<template>
  <div id="app">
    <!-- Page Wrapper -->
    <div id="page-wrapper">
      <!-- Header -->
      <header id="header" class="alt">
        <h1><a href="index.html">Solid State</a></h1>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>

      <!-- Menu -->
      <nav id="menu">
        <div class="inner">
          <h2>Menu</h2>
          <ul class="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
          <a href="#" class="close">Close</a>
        </div>
      </nav>

      <router-view />

      <!-- Footer -->
      <section id="footer">
        <div class="inner">
          <h2 class="major">Get in touch</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce
            tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus.
            Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <form method="post" action="#">
            <div class="fields">
              <div class="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div class="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul class="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </form>
          <ul class="contact">
            <li class="icon solid fa-home">
              Sam Inc.
              <br />
              123 Fake St. #4567
              <br />
              Chicago, IL.
            </li>
            <li class="icon solid fa-phone">(123) 456-789</li>
            <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
            <li class="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
            <li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
            <li class="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
          </ul>
          <ul class="copyright">
            <li>&copy; Sam Inc. All rights reserved.</li>
            <li>
              Design:
              <a href="https://www.izguerraS.github.io">Sam Inc.</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
