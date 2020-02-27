<template>
  <div class="container-fluid px-0">
    <div id="carousel-controls" class="carousel slide" data-ride="carousel" data-interval="999999">
      <div class="carousel-inner bg-info" role="listbox">
        <div class="carousel-item active">
          <div class="d-flex align-items-center justify-content-center min-vh-100">
            <HvaErDataplattform/>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex align-items-center justify-content-center min-vh-100">
            <Datasett/>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex align-items-center justify-content-center min-vh-100">
            <h1 class="display-1">THREE</h1>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel-controls" role="button" data-slide="prev">
        Gå tilbake
      </a>
      <a class="carousel-control-next" href="#carousel-controls" role="button" data-slide="next">
        Neste
      </a>
    </div>
  </div>
</template>

<script>
 import HvaErDataplattform from "./HvaErDataplattform";
 import Datasett from "./Datasett";
 export default {
     name: "Slider",
     components: {
         HvaErDataplattform,
         Datasett
     }
 }
</script>

<style scoped>
 .bg-info {
     background-color: #fff !important;
  }
  .carousel-control-prev {
      left: 3rem;
  }
 .carousel-control-next {
     right: 3rem;
 }
 .carousel-control-prev,
 .carousel-control-next {
     top: unset;
     border: 0;
     bottom: 2rem;
     color: #2A2859;
     height: 54px;
     background: #B3F5FF;
     font-family: Oslo Sans;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 27px;
     opacity: 1;
 }
 .carousel-control-prev:hover,
 .carousel-control-next:hover {
     color: inherit;
 }
 .min-vh-100 {
     min-height: 70vh !important;
 }
</style>
