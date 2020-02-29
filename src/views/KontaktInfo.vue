<template>
  <div class="content">
    <h3>LAGET AV GJENGEN®</h3>-
    <img src="https://globalsemestersblog.files.wordpress.com/2014/02/friends.jpg" />
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
