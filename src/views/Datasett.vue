<template>
  <div class="content">
    <div>
      <h1>Datasett</h1>
      <p>
        I datakatalogen lagrer vi både åpne og lukkede
        datasett. Som eier av et datasett vil du kunne manuelt
        eller automatisk laste opp nye versjoner av dataen samt
        se hvor mange det er som har lastet ned datasettet. For
        de som ønsker å finne og bruke et datasett er det enkelt
        å søke etter det du leter etter i katalogen og vi tilbyr
        nedlastning og analyse av dataene. Du vil også her finne
        kontaktinformasjon til eier av datasettet.
      </p>
      <ul>
        <li><Icons arrow /> Ta en titt i datasettkatalogen</li>
        <li><Icons arrow /> Registrer et datasett</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Icons } from '@tuuturu/vue/assets'
  export default {
      name: "Datasett",
      components: {
          Icons
      }
  }
</script>

<style scoped>
 .content {
     text-align: left;
     display: flex;
     align-items: center;
     flex-direction: column;
     width:50px;
     white-space: normal;
     word-break: break-word;
     max-width:1200px;
 }
 .Icons {
     display: inline-block;
 }
 li {
     margin: 1rem 0;
 }
 .content, p {
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
