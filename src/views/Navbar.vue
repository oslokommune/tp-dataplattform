<template>
  <div class="navbar">
    <table table-hover class="navtable">
      <tr>
        <b>
          <a href="/tp-dataplattform" class="nav-link" Navigering>Forsiden</a>
        </b>
      </tr>
      <tr>
        <b>
          <a
            href="https://developer.oslo.kommune.no/katalog/data"
            class="nav-link"
            Navigering
          >Datasett</a>
        </b>
      </tr>
      <tr>
        <b>
          <a href="/ontaktinfo" class="nav-link" Navigering>Kontakt oss</a>
        </b>
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
  .nav-link {
    border-bottom: 3px solid #6fe9ff !important;
  }
}

a {
  color: black;
}
</style>
