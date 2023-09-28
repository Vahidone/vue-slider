# vue-slider

## consegna: Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue. Al click su una thumb, visualizzare in grande l’immagine corrispondente.

#### pseudocodice
  1. Definire il dato "photos" come un array di oggetti con immagini, titoli e testi.
  2. Definire il "counterImg" per tenere traccia dell'immagine attualmente visualizzata.
  3. Definire il metodo "btnNextPrev" per gestire la navigazione tra le immagini.
  4. Bindare i dati relativi alle immagini, ai titoli e ai testi negli elementi in html.
  5. Ciclare le thumbs con "v-for".


### Bonus 1:applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

#### pseudocodice
1. Utilizzare setInterval al'interno del mounted applicando su btnNextPrev() 

### Bonus 2: quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce.

#### pseudocodice

1. Aggiungere una variabile per tenere traccia dello stato del mouse (chiamata isHovered)
2. Impostare un autoplayInterval utilizzando setInterval. All'interno dell'intervallo, verificare se isHovered è false prima di eseguire l'azione dell'autoplay.
3. Creare una funzione per cancellare autoplayInterval fermando l'autoplay.
4. Aggiungere gli eventi @mouseenter e @mouseleave in html per impostare correttamente isHovered.