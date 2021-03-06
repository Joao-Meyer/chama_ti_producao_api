const { Model, DataTypes } = require("sequelize");

class SexoPrestadorServicos extends Model {
    static init(sequelize) {
        super.init(
            {
                sexo: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: "tbl_sexo_prestador_servicos"
            }
        );
    }

    static associate(models) {
        this.hasMany(models.PrestadorServicos, {
            foreignKey: "sexo_prestador_servicos_id"
        });
    }
}

module.exports = SexoPrestadorServicos;