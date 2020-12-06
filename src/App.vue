<template>
  <v-app>
    <div>
      <v-app-bar color="blue">
      <v-app-bar-title color="white">Odontologia</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn> 
      <v-btn text to="/sobre">Sobre</v-btn>  
      <v-btn text to="/agendar">Agendar</v-btn> 
      <v-btn text to="/dashboard">cliente</v-btn>          
      </v-app-bar>      
    </div>        
      <v-row>
        <router-view/>
      </v-row> 
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Poppins:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
</style>