<template>
  <v-app>
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

  </v-app>
</template>

<script>
export default {
  data () {
      return {
          items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
          ],
      }
  }
}
</script>

<style>

</style>