<template>
  <div class="home">
    <div class="window navbar">
      <Navbar />
    </div>
    <div class="window slider">
      <Slider />
    </div>
    <div class="window slack_message">
      <SlackIntegration />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Slider from "./Slider";

export default {
  name: "Home",
  components: { Slider, Navbar }
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Oslo Sans", Avenir, Helvetica, Arial, sans-serif;
}
p.old {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.home {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

h1 {
  color: white;
  height: 55px;
}

.window {
  padding: 30px;
}

.slider {
  width: 100%;
}
</style>
