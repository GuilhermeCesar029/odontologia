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
        <h2 id="procedimentos">Procedimentos</h2>
        <v-container>
          
            <v-layout row wrap>
              <v-col 
                cols="3"
                v-for="item in items"
                :key="item.nome" 
              >
                <div class="card">
                  <v-card 
                    elevation="24" 
                    outlined                   
                  >
                    <v-card-text>
                      <v-card-title>{{item.nome}}</v-card-title>
                      <v-card-text>{{item.descricao}}</v-card-text>
                      <v-card-text>{{item.data}}</v-card-text>
                      <v-card-text>{{item.hora}}</v-card-text>
                      <v-card-text>{{item.local}}</v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon><v-icon>mdi-delete</v-icon></v-btn>
                      <v-btn icon><v-icon>mdi-pencil</v-icon></v-btn>
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
export default {
  data () {
      return {
          items: [
            { 
              nome: 'Canal', descricao: 'descrição do procedimento', hora: '10:15', 
              data : '06/01/2021', local: 'Luziania - G0'
            },
            { 
              nome: 'teste2', descricao: 'descrição2', hora: '11:30', 
              data : '23/12/2020', local: 'Luziania - G0'
            },
            { 
              nome: 'teste3', descricao: 'descrição3', hora: '14:40', 
              data : '23/01/2021', local: 'Luziania - G0'
            },
            
          ],
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