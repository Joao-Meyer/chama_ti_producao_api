const { Model, DataTypes } = require("sequelize");

class LocalizacaoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            latitude: DataTypes.STRING,
            longitude: DataTypes.STRING,
            data_hora: DataTypes.DATE,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_localizacao_cliente"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = LocalizacaoCliente;