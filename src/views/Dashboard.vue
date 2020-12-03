<template>
    <v-row>
      <v-col cols="2">
         <v-navigation-drawer permanent>
           <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>
    
                <v-list-item-content>
                  <v-list-item-title>Guilherme César</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
    
           <v-divider></v-divider>            
        </v-navigation-drawer>
      </v-col>
      
      <v-col cols="10">  
        <h2 id="procedimentos">Próximas Consultas</h2>
        <v-container>
          
            <v-layout row wrap>
              <v-col 
                cols="3"
                v-for="cliente of clientes" 
                :key="cliente.id"
              >
                <div class="card">
                  <v-card 
                    elevation="24" 
                    outlined                   
                  >
                    <v-card-text>
                      <v-card-title>Procedimento: {{cliente.procedimento}}</v-card-title>
                      <v-card-text>Data: {{cliente.data}}</v-card-text>
                      <v-card-text>Hora: {{cliente.hora}}</v-card-text>
                      <v-card-text>Telefone: {{cliente.telefone}}</v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                           @click="editar(cliente)"                           
                            v-bind="attrs"
                            v-on="on"                            
                            icon
                            color="primary"
                          >
                          <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <v-card>
                          <form @submit.prevent="salvar">
                            <v-card-title>
                              <span class="headline">Atualizar</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>                                
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.nome"
                                        label="Nome completo"
                                        prepend-icon="mdi-account-circle"
                                        required
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.telefone"
                                        label="Telefone"
                                        prepend-icon="mdi-phone"
                                        required
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.email"
                                        label="Digite seu melhor email"
                                        prepend-icon="mdi-email"
                                        required
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.data"
                                        label="Data"
                                        prepend-icon="mdi-calendar"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.procedimento"
                                        label="Procedimento"
                                        prepend-icon="mdi-pencil"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field
                                        v-model="cliente.hora"
                                        label="horario"
                                        prepend-icon="mdi-calendar-clock"
                                      ></v-text-field>
                                    </v-col>                                 
                                </v-row>
                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                              >
                                Fechar
                              </v-btn>
                              <button>Atualizar</button>
                            </v-card-actions>
                          </form>  
                        </v-card>
                      </v-dialog> 

                      <v-btn 
                        color="red"
                        icon
                        @click="remover(cliente)"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>                      
                    </v-card-actions>
                  </v-card> 
                </div>
              </v-col>
            </v-layout>

                  
        </v-container> 
      </v-col>  
    </v-row>
</template>

<script>

import Cliente from '../services/clientes';

export default {

  mounted(){
    this.listar()
  },

  data () {
      return {
        clientes: [],
        cliente: {
          id: '',
          nome: '',
          telefone: '',
          email: '',
          data: '',
          procedimento: '',
          hora: '', 
        },
        dialog: false,
      }
  },

  methods:{

    listar(){
      Cliente.listar().then(resposta => {
        this.clientes = resposta.data
      })
    },

    salvar(){
      if(!this.cliente.id){ //se o id for nulo
        Cliente.salvar(this.cliente).then(resposta => {
          alert('Salvo com sucesso!')
          this.cliente = resposta
          this.listar() //para listar depois que salva
        })  
      }else{//se nao for nulo, atualizar
        Cliente.atualizar(this.cliente).then(resposta => {
          alert('Atualizado com sucesso!')
          this.cliente = resposta
          this.listar(); //para listar depois que atualiza
        })  
      }
    },

    editar(cliente){
      this.cliente = cliente
    },

    remover(cliente){
      if(confirm('Deseja excluir a consulta?')){
        Cliente.apagar(cliente).then(resposta => {
          this.cliente = resposta
          this.listar();
        })
      }      
    }
  }
}
</script>

<style>
  #procedimentos {
    text-align: center;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
  }
  .card {
    border-width: 1px;
    border-color: rgb(137, 199, 244);
  }
</style>