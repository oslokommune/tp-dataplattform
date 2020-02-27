<template>
  <div class="container-fluid px-0">
    <div id="carousel-controls" class="carousel slide" data-ride="carousel" data-interval="999999">
      <div class="carousel-inner bg-info" role="listbox">
        <div class="carousel-item active">
          <div class="d-flex justify-content-center min-vh-100">
            <HvaErDataplattform/>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex justify-content-center min-vh-100">
            <Datasett/>
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-flex justify-content-center min-vh-100">
            <HvordanBruke/>
          </div>
        </div>
      </div>
      <div class="controls">
        <a class="carousel-control-prev" href="#carousel-controls" role="button" data-slide="prev">
          Gå tilbake
        </a>
        <a class="carousel-control-next" href="#carousel-controls" role="button" data-slide="next">
          Neste
        </a>
      </div>
    </div>
  </div>
</template>

<script>
 import HvaErDataplattform from "./HvaErDataplattform";
 import Datasett from "./Datasett";
 import HvordanBruke from "./HvordanBruke";
 export default {
     name: "Slider",
     components: {
         HvaErDataplattform,
         Datasett,
         HvordanBruke
     }
 }
</script>

<style scoped>
 .controls {
     display: flex;
 }
 .bg-info {
     background-color: #fff !important;
 }
 .carousel-control-prev {
     left: 3rem;
 }
 .carousel-control-next {
     right: 3rem;
     margin-left: auto;
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
 .carousel-control-prev:focus,
 .carousel-control-next:hover,
 .carousel-control-next:focus {
     color: inherit;
 }
 .carousel-control-prev,
 .carousel-control-next {
     position: static;
 }
 .min-vh-100 {
     min-height: 70vh !important;
 }
</style>
