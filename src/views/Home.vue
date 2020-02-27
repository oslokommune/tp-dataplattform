<template>
  <div class="home">
    <h1>WE GOT YO DATA</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
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
  background-image: url("~@/assets/bg.jpg");
  background-size: cover;
}

h1 {
  color: white;
  height: 55px;
}
</style>
