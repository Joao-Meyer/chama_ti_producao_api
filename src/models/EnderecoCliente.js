const { Model, DataTypes } = require("sequelize");

class EnderecoCliente extends Model {
    static init (sequelize){
        super.init(
            {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            cep: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            complemento: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
        },
        {
            sequelize,
            tableName:"tbl_endereco_cliente"
        }
        );
    }

    static associate(models){
        this.hasOne(models.Bairro, {
            foreignKey: "id_bairro"
        });
        this.hasOne(models.Cidade, {
            foreignKey: "id_cidade"
        });
        this.hasOne(models.Estado, {
            foreignKey: "id_estado"
        });
        this.hasOne(models.Cliente, {
            foreignKey: "id_cliente"
        });
    }
}

module.exports = EnderecoCliente;