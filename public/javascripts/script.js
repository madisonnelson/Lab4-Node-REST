/*global Vue*/
/*global fetch*/

var app = new Vue({
  el: '#app',
  data: {
    cities: [],
    definitions: [],
    prefix: '',
    word: '',
  },
  methods: {
    fetchREST() {
      console.log("In Fetch " + this.prefix);
      var url = "/getcity?q=" + this.prefix;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((citylist) => {
          console.log("CityList");
          console.log(citylist);
          this.cities = [];
          for (let i = 0; i < citylist.length; i++) {
            console.log(citylist[i].city);
            this.cities.push({ name: citylist[i].city });
          }
          //console.log("Got Citylist");
          console.log("Got definition");
        });
    },
    
    getDefinition(){
      console.log(this.word);
      console.log("In Definition " + this.word);
      var url = "/definition?q=" + this.word;
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          //console.log(data.json());
          return (data.json());
        })
        .then((defList) => {
          console.log("Definition");
          console.log(defList);
          this.definitions = defList;
          console.log("Got definition");
        });
    }
  },
});
