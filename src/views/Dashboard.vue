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
        <v-container>
          
            <v-layout row wrap>
              <v-col 
                cols="3"
                v-for="item in items"
                :key="item.nome" 
              >
                <v-card elevation="24" outlined>
                  <v-card-text>
                    <div>{{item.nome}}</div>
                    <div>{{item.sobrenome}}</div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn><v-icon>mdi-delete</v-icon></v-btn>
                  </v-card-actions>
                </v-card> 
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
            { nome: 'Guilherme', sobrenome: 'cesar' },
            { nome: 'teste2', sobrenome: 'teste2' },
            { nome: 'teste3', sobrenome: 'teste3' },
            
          ],
      }
  }
}
</script>

<style>

</style>