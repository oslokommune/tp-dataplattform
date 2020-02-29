<template>
  <div class="content">
    <div>
      <h1>Hvordan bruke dataplattformen</h1>
      <iframe
        src="https://player.vimeo.com/video/372354579"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <p>
        <a href="https://vimeo.com/372354579">Deling og gjenbruk av data</a> fra
        <a href="https://vimeo.com/osloorigo">Oslo Origo</a> på
        <a href="https://vimeo.com">Vimeo</a>.
      </p>
    </div>
  </div>
</template>

<script>
import { Icons } from "@oslokommune/vue/assets";
export default {
  name: "Datasett",
  components: {
    Icons
  }
};
</script>

<style scoped>
.content {
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50px;
  white-space: normal;
  word-break: break-word;
  max-width: 1200px;
}
.Icons {
  display: inline-block;
}
li {
  margin: 1rem 0;
}
.content,
p {
  font-size: 24px;
  line-height: 34px;
}
ul {
  margin: 1.5rem 4rem;
}
h1 {
  margin-bottom: 1.5rem;
}
</style>
