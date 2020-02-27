<template>
    <div class="content">
        <div>
            <h1>Hva er dataplattformen?</h1>

            <p>
                Med dataplattformen tilbyr vi en rekke verktøy og tjenester som gjør det lett å skape verdi med data på
                en måte som ivaretar personvern og individets rettigheter. Vi lever etter prinsippene om at:
            </p>

            <ul class="list">
                <li>Livet er en strøm av hendelser</li>
                <li>Innsikt om innbyggerne skaper bedre tjenester</li>
            </ul>

            <p>
                Med dataplattformen får du for eksempel få tilgang til et datasett med informasjon om vannkvaliteten på
                Oslo kommune sine badeplasser.
            </p>

            <img src="~@/assets/dataeksempel.png" />
        </div>
    </div>
</template>

<script>
	export default {
		name: "HvaErDataplattform"
	}
</script>

<style scoped>
    .content {
        text-align: left;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .list {
        list-style: disc;
    }

    .list li {
        list-style-position: inside;
    }
</style>