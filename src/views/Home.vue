
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
                    text to="/Agendar"
                  >
                    Agende sua consulta
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
          { 
            text: '5 anos fazendo um belo sorriso que pode mudar a vida das pessoas.', 
          },
          { 
            text: 'Um belo sorriso pode mudar a vida das pessoas e por isso ajudamos você a conquistar um sorriso estético funcional e natural.',
          },
          { 
            text: 'É uma alegria e uma satisfação enorme trabalhar com que se ama e seguir assim, construindo sorrisos!',
          },
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
    background-image: url(../assets/imagem-fundo-home.png);
    height: 100vh;
    width: 100vw;
  } 
  .text{
    text-align: center;
    color: white;
  }
  .btn {
    background-color: #0790f9; 
    /* background-color: blue; */
  }
</style>