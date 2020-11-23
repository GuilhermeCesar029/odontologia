<template>
  <v-container>    
    <div>  
      <div id="centrologo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="titulo">
        <p>Sobre Nós</p>
      </div>
      <div id="texto">
        <p>
          Seja bem vindo a OdontoVGM. Há 5 anos construindo lindos sorrisos!
          Um belo sorriso pode mudar a vida das pessoas e por isso ajudamos você a conquistar um sorriso 
          estético funcional e natural, sinônimo de saúde e bem-estar!
        </p>
        <p>
          Clínica Sorriso e Sorriso Odontologia – Empresas voltadas para a arte de fazer você sorrir, 
          fundada em 2015, foram instaladas em Valparaíso de Goiás com objetivo de ser uma clínica 
          voltada para a satisfação de seu usuário, tendo como foco principal você paciente.
        </p>
        <p>
          Instalações modernas, quadro clínico especializado, excelência em ortodontia, 
          deformidades esqueléticas (cirurgia ortognática) e implantodontia.
        </p>
      </div>
      <div>
        <video-embed src="https://www.youtube.com/watch?v=KdXAETopa1s"></video-embed>
      </div>
    </div> 
  </v-container> 
</template>

<script>

export default {
  data () {
    return {
     
    }
  }
}
</script>

<style>
  .titulo {
    margin-left: auto;
    margin-right: auto;
    width: 6em;
    color: #192431;
    font-size: 40px;
    font-weight: 300;
    line-height: 54px;
    font-family: 'Poppins', sans-serif; 
    line-height: 2.5;
  }
  #centrologo {
    margin-left: auto;
    margin-right: auto;
    width: 6em;
    font-size: 45px;
    line-height: 2.5;
  } 
  #texto {
    margin: 0 0 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: #4c5b6d;
  }
</style>