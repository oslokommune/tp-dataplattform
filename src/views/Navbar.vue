<template>
  <div class="navbar">
    <table class="navtable">
      <th>Navigering</th>
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
  border: 1px solid black;
  display: flex; /* or inline-flex */
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 900px;
  background-color: white;
}
</style>
