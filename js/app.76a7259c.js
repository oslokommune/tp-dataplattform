(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);v&&v(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tp-dataplattform/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var v=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0c81":function(e,t,r){},"0d03":function(e,t,r){},"212f":function(e,t,r){"use strict";var a=r("8f53"),n=r.n(a);n.a},3521:function(e,t,r){"use strict";var a=r("b7ec"),n=r.n(a);n.a},3975:function(e,t,r){"use strict";var a=r("6995"),n=r.n(a);n.a},"4f4a":function(e,t,r){},"4fcd":function(e,t,r){"use strict";var a=r("6b5a"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{staticClass:"content"}),r("Footer")],1)},s=[],o=r("f564"),i={components:{Header:o["Header"],Footer:o["Footer"]}},l=i,c=(r("5c0b"),r("2877")),v=Object(c["a"])(l,n,s,!1,null,null,null),u=v.exports,m=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"window navbar"},[r("Navbar")],1),r("div",{staticClass:"window slider"},[r("Slider")],1),r("div",{staticClass:"window slack_message"},[r("SlackIntegration")],1)])},d=[],f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("table",{staticClass:"navtable",attrs:{"table-hover":""}},[r("tr",[r("b",[r("a",{staticClass:"nav-link",attrs:{Navigering:""}},[e._v("Navigering")])])]),r("tr",[r("b",[r("a",{staticClass:"nav-link",attrs:{Navigering:""}},[e._v("Datasett")])])]),r("tr",[r("b",[r("a",{staticClass:"nav-link",attrs:{Navigering:""}},[e._v("Kontakt oss")])])])])])}],h={name:"Navbar"},g=h,k=(r("99e2"),Object(c["a"])(g,f,_,!1,null,"3148a318",null)),b=k.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid px-0"},[r("div",{staticClass:"carousel slide",attrs:{id:"carousel-controls","data-ride":"carousel","data-interval":"999999"}},[r("div",{staticClass:"carousel-inner bg-info",attrs:{role:"listbox"}},[r("div",{staticClass:"carousel-item active"},[r("div",{staticClass:"d-flex align-items-center justify-content-center min-vh-100"},[r("HvaErDataplattform")],1)]),r("div",{staticClass:"carousel-item"},[r("div",{staticClass:"d-flex align-items-center justify-content-center min-vh-100"},[r("Datasett")],1)]),r("div",{staticClass:"carousel-item"},[r("div",{staticClass:"d-flex align-items-center justify-content-center min-vh-100"},[r("HvordanBruke")],1)])]),r("a",{staticClass:"carousel-control-prev",attrs:{href:"#carousel-controls",role:"button","data-slide":"prev"}},[e._v(" Gå tilbake ")]),r("a",{staticClass:"carousel-control-next",attrs:{href:"#carousel-controls",role:"button","data-slide":"next"}},[e._v(" Neste ")])])])},j=[],y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",[a("h1",[e._v("Hva er dataplattformen?")]),a("p",[e._v(" Med dataplattformen tilbyr vi en rekke verktøy og tjenester som gjør det lett å skape verdi med data på en måte som ivaretar personvern og individets rettigheter. Vi lever etter prinsippene om at: ")]),a("ul",{staticClass:"list"},[a("li",[e._v("Livet er en strøm av hendelser")]),a("li",[e._v("Innsikt om innbyggerne skaper bedre tjenester")])]),a("p",[e._v(" Med dataplattformen får du for eksempel få tilgang til et datasett med informasjon om vannkvaliteten på Oslo kommune sine badeplasser. ")]),a("img",{attrs:{src:r("a314")}})])])}],E={name:"HvaErDataplattform"},C=E,$=(r("3975"),Object(c["a"])(C,y,x,!1,null,"1e5ca0ed",null)),H=$.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("div",[r("h1",[e._v("Datasett")]),r("p",[e._v(" I datakatalogen lagrer vi både åpne og lukkede datasett. Som eier av et datasett vil du kunne manuelt eller automatisk laste opp nye versjoner av dataen samt se hvor mange det er som har lastet ned datasettet. For de som ønsker å finne og bruke et datasett er det enkelt å søke etter det du leter etter i katalogen og vi tilbyr nedlastning og analyse av dataene. Du vil også her finne kontaktinformasjon til eier av datasettet. ")]),r("ul",[r("li",[r("Icons",{attrs:{arrow:""}}),e._v(" Ta en titt i datasettkatalogen")],1),r("li",[r("Icons",{attrs:{arrow:""}}),e._v(" Registrer et datasett")],1)])])])},O=[],D=r("b4e7"),S={name:"Datasett",components:{Icons:D["Icons"]}},P=S,T=(r("6221"),Object(c["a"])(P,I,O,!1,null,"00626f2a",null)),B=T.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("div",[r("h1",[e._v("Hvordan bruke dataplattformen")]),r("iframe",{attrs:{src:"https://player.vimeo.com/video/372354579",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}}),r("p",[r("a",{attrs:{href:"https://vimeo.com/372354579"}},[e._v("Deling og gjenbruk av data")]),e._v(" fra "),r("a",{attrs:{href:"https://vimeo.com/osloorigo"}},[e._v("Oslo Origo")]),e._v(" på "),r("a",{attrs:{href:"https://vimeo.com"}},[e._v("Vimeo")]),e._v(". ")])])])}],A={name:"Datasett",components:{Icons:D["Icons"]}},M=A,F=(r("5c77"),Object(c["a"])(M,R,V,!1,null,"5108b823",null)),K=F.exports,N={name:"Slider",components:{HvaErDataplattform:H,Datasett:B,HvordanBruke:K}},U=N,q=(r("6da4"),Object(c["a"])(U,w,j,!1,null,"959e2688",null)),G=q.exports,J={name:"Home",components:{Slider:G,Navbar:b}},L=J,Y=(r("f3c9"),Object(c["a"])(L,p,d,!1,null,"be57ae40",null)),z=Y.exports,X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-dataplattform/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@tuuturu/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-dataplattform/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],Z=r("6789"),W=r("36b8"),ee={name:"help",components:{BaseButton:Z["BaseButton"],TextInput:W["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},te=ee,re=(r("4fcd"),Object(c["a"])(te,X,Q,!1,null,"041e7533",null)),ae=re.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},se=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],oe={name:"inspiration"},ie=oe,le=(r("212f"),Object(c["a"])(ie,ne,se,!1,null,"8395b308",null)),ce=le.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},ue=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],me={name:"awards"},pe=me,de=(r("9aa7"),Object(c["a"])(pe,ve,ue,!1,null,"2afce1f6",null)),fe=de.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},he=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],ge={name:"awards"},ke=ge,be=(r("3521"),Object(c["a"])(ke,_e,he,!1,null,"7553d664",null)),we=be.exports;a["a"].use(m["a"]);var je=[{path:"/",name:"Home",component:z},{path:"/help",name:"Help",component:ae},{path:"/inspiration",name:"Inspiration",component:ce},{path:"/awards",name:"Awards",component:fe},{path:"/resources",name:"Resources",component:we}],ye=new m["a"]({routes:je}),xe=ye;r("4989"),r("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:xe,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"5c77":function(e,t,r){"use strict";var a=r("0c81"),n=r.n(a);n.a},6221:function(e,t,r){"use strict";var a=r("a546"),n=r.n(a);n.a},6995:function(e,t,r){},"6b5a":function(e,t,r){},"6da4":function(e,t,r){"use strict";var a=r("d055"),n=r.n(a);n.a},"8f53":function(e,t,r){},"966f":function(e,t,r){},"99e2":function(e,t,r){"use strict";var a=r("966f"),n=r.n(a);n.a},"9aa7":function(e,t,r){"use strict";var a=r("0d03"),n=r.n(a);n.a},"9c0c":function(e,t,r){},a314:function(e,t,r){e.exports=r.p+"img/dataeksempel.da7b384b.png"},a546:function(e,t,r){},b7ec:function(e,t,r){},d055:function(e,t,r){},f3c9:function(e,t,r){"use strict";var a=r("4f4a"),n=r.n(a);n.a}});
//# sourceMappingURL=app.76a7259c.js.map