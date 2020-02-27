<template>
    <div class="home">
        <div class="window">
            <Navbar/>
        </div>
        <div class="window">
            <Slider/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "./Navbar";
import Slider from "./Slider";
export default {
  name: "Home",
	components: {Slider, Navbar}
}
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
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
  color: white;
  height: 55px;
}

.window {
    padding: 30px;
}
</style>
