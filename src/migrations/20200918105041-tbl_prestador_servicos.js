'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_prestador_servicos", {
      id_prestador_servicos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_sexo_prestador_servicos : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_sexo_prestador_servicos",
          key: "id_sexo_prestador_servicos"
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
    return queryInterface.dropTable("tbl_prestador_servicos");
  }
};