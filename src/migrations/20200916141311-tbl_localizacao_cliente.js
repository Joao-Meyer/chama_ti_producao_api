'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_localizacao_cliente", {
      id_localizacao_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      latitude:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude:  {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_hora: {
        type: Sequelize.DATE,
        allowNull: false
      },
      id_cliente : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_cliente",
          key: "id_cliente"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tbl_localizacao_cliente");
  }
};