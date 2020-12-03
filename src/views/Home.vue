
<template>  
    <v-row id="fundo">
      <div id="carrossel"> 
        <v-carousel
          cycle
          light
          height="400"
          max="30"
          hide-delimiters
        >
          <v-carousel-item
            v-for="item in items"
            :key="item.text"
            :src="item.src"
          >
            <div class="text">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="display-3">
                {{ item.text }} 
                </div>
                
                <div class="btn">
                  <v-btn
                    color="white"
                    depressed
                    text to="/sobre"
                  >
                    Saiba Mais
                  </v-btn>
                </div>
              </v-row>
            </div>    
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-row>   
</template>

<script>

export default {
  data () {
      return {
         items: [
          { text: '5 anos fazendo um belo sorriso que pode mudar a vida das pessoas.',},
          { text: 'Conheça nossos tratamentos, são mais de 10 tratamentos ',},
          { text: 'https://fotos-site-odonto.s3.us-east-2.amazonaws.com/saiba-mais.jpg',},
        ],
      }
    },
  name: 'Home',
  components: {
    
  }
}
</script>
<style>
   #carrossel { 
    margin-top: 10em;    
    margin-right: auto;
    margin-left: 5em;
    width: 52em;
  } 
  #fundo {
    background-image: url(../assets/imagem-fundo-odonto-1.jpg);
    height: 100vh;
    width: 100vw;
  } 
  .text{
    text-align: center;
    color: white;
  }
  .btn {
    background-color: blue;
  }
</style>