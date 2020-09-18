'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_servico", {
      id_servico: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      problema:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao:  {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_hora_abertura:  {
        type: Sequelize.DATE,
        allowNull: false
      },
      data_hora_encerramento: {
        type: Sequelize.DATE,
        allowNull: true
      },
      em_aberto: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      resolvido_por: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
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
      id_prestador_servicos : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_prestador_servicos",
          key: "id_prestador_servicos"
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
    return queryInterface.dropTable("tbl_servico");
  }
};