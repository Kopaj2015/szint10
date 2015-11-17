Esemeny = new Mongo.Collection('esemeny');
Verseny = new Mongo.Collection('verseny');
Fogadas = new Mongo.Collection('fogadas');

var Schemas = {};

Schemas.Esemeny = new SimpleSchema({
    nev: {
        type: String
    },
    idopont: {
        type: String
    },
    kategoria: {
        type: String
    }
});
Esemeny.attachSchema(Schemas.Esemeny);

Schemas.Verseny = new SimpleSchema({
    esemeny_id: {
        type: String,
    },
    user_id1: {
        type: String
    },
    user_id2: {
        type: String
    },
    eredmeny: {
        type: String
    },
    kategoria: {
        type: String
    }
});
Verseny.attachSchema(Schemas.Verseny);

Schemas.Fogadas = new SimpleSchema({
    user_id: {
        type: String,
    },
    verseny_id: {
        type: String
    },
    fogadas: {
        type: String
    },

});
Fogadas.attachSchema(Schemas.Fogadas);