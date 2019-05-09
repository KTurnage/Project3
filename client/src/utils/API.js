import axios from 'axios';

export default {
    
    
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
    deleteUser: function(id) {
      return axios.delete("/api/user/" + id);
    },
    saveUser: function(userData) {
      return axios.post("/api/user", userData);
    }
  };
  