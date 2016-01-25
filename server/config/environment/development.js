'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
  //  uri: 'mongodb://localhost:27017/webnodejs-dev'
      uri:"mongodb://root:root@ds047335.mongolab.com:47335/webbuilder"
  },

  // Sequelize connecton opions
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
