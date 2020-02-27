<template>
  <div class="navbar">
    <table table-hover class="navtable">
      <tr>
        <b>Navigering</b>
      </tr>
      <tr>
        <b>Om oss</b>
      </tr>
      <tr>
        <b>Kontakt oss</b>
      </tr>
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
  flex-wrap: wrap;
  height: 200px;
  background-color: white;
  max-width: 200px;
}

tr,
th {
  width: 200px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
}

tr:hover {
  background-color: #ffff99;
}
</style>
