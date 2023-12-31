
const {createApp} = Vue;

createApp({
  data() {
    return {
      photos: [
        {
          image: 'img/01.webp',
          title: 'Marvel\'s Spiderman Miles Morale',
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }
      ],

      counterImg: 0,
      autoplayInterval: null,
      isHovered: false

      
    }
  },



  methods: {
    // funzione per i bottoni next e prev von un valore booleano
    btnNextPrev(isAvanti){
      isAvanti ? this.counterImg++ : this.counterImg--;

      // condizione per assicurare che counterImg rimanga all'interno dei limiti degli indici validi dell'array photos  

      if (this.counterImg === this.photos.length){
        this.counterImg = 0;
      }else if(this.counterImg < 0){
        this.counterImg = this.photos.length - 1;
      }
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.btnNextPrev(true);

        if (!this.isHovered) {
          this.btnNextPrev(true);
        }
        
      }, 3000);

      
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },


    
  },

  mounted () {
    this.startAutoplay();

    setInterval (() => {
      this.btnNextPrev(false)
    }, 3000);

  },
  



}).mount("#app")