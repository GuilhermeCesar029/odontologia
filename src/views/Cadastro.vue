<template>
  <v-container>
    <v-row>  
      <v-col cols="7">
        <v-row>
          <v-col>
            <img class="imagem" src="../assets/equipe-cadastro.jpg" alt="">
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-col>
            <div class="endereco">
            <p class="endereco-linha">(61) 99876-8765</p>
            <p class="endereco-linha">Rua 90, Loja 10 Quadra 78, S/N, Lote 11/12 </p>
            <p class="endereco-linha">Parque Estrela Dalva X</p>
            <p class="endereco-linha">Luziânia / GO</p>
            <p class="endereco-linha">72853-129 </p>
            <p class="endereco-linha">odontovgm@gmail.com</p>
            </div>  
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-row>
          <v-col >
            <div class="form">
              <form action="">
                <div class="fundo-cima">
                <div class="agenda-texto">
                  <h2 class="agenda-titulo">AGENDE SUA AVALIAÇÃO</h2>
                  <p class="agenda-subtitulo">Preencha o formulário e agende sua avaliação com um dentista na odontoVGM</p>
                </div>
                <div class="agenda-local">
                  <span>Luziânia</span>
                </div>
                </div>
                <div class="agenda-input">
                  <v-text-field
                    v-model="nome"
                    label="Nome completo"
                    prepend-icon="mdi-account-circle"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="telefone"
                    label="Telefone"
                    prepend-icon="mdi-phone"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Digite seu melhor email"
                    prepend-icon="mdi-email"
                  ></v-text-field>
                  <v-text-field
                    v-model="data"
                    label="Data"
                    prepend-icon="mdi-calendar"
                  ></v-text-field>
                  <button class="agendar-btn">AGENDAR AVALIAÇÃO</button>
                </div>
              </form>
            </div>            
          </v-col>
        </v-row>  
      </v-col>
    </v-row>  
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
  .imagem {
    border-radius: .7em;
  }
  .endereco {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;  
    font-size: 1.2rem; 
     
  }
  .endereco-linha {    
    color: #6d6e71;    
    line-height: 1.2; 
  }
  .form {
    align-self: flex-start;
    margin: 1rem auto;
    box-shadow: 0 .4rem 2rem rgba(90,90,90,.2);
    max-width: 60rem;
    border-radius: 15px;
    margin-left: 0.2rem;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
  }
  .fundo-cima {
    background-color: rgb(137, 199, 244);
  }
  .agenda-texto {
    color: white;    
  }
  .agenda-titulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 25px;
  }
  .agenda-subtitulo {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
    font-size: 19px;
  }
  .agenda-local {
    text-align: center;
    margin-top: 3rem;
    color: white;  
    font-size: 30px;
  }
  .agendar-btn {
    background-color: #51b750;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.8rem 4rem;
    height: auto;
    border-radius: 40px;
    transition: all .2s;
    position: relative;
    font-size: 1.2rem;
    display: inline-block;
    border: none;
    outline: none;
    text-align: center;
    vertical-align: top;
  }
</style>