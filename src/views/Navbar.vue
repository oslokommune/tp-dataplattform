<template>
  <div class="navbar">
    <table class="navtable">
      <tr>Navigering</tr>
      <tr>Om oss</tr>
      <tr>Kontakt oss</tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
p {
  font-family: "Oslo Sans", Avenir, Helvetica, Arial, sans-serif;
}
p.old {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.navtable {
  padding-top: 18px;
  border: 1px solid black;
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
  height: 200px;
  background-color: white;
  max-width: 200px;
}

tr,
th {
  width: 200px;
  padding: 3px;
}
</style>
