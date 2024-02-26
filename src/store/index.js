import { createStore } from 'vuex'

export default createStore({
  state: {
    home: [],
    about: [],
    products: []
  },
  mutations: {
    setAbout(state, about) {
      state.about = about // Access the "About" property in the response
    },
    setHome(state, homedata) {
      state.home = homedata
    },
    setProducts(state,data){
      state.products = data
  }
  },
  actions: {
    fetchAbout({commit}) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            commit('setData', data.About[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchHome({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(home=> {
        // console.log(home)
        commit('setHome',home.Home[0])
      })
    },
    fetchProducts({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.Products)
            commit('setProjects', data.Products);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    }
  },
  modules: {
  }
})
