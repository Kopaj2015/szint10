Meteor.publish('esemeny',function(){
    return Esemeny.find({});
});

Meteor.publish('verseny',function(){
    return Verseny.find({});
});

Meteor.publish('users',function(){
    return Meteor.users.find({});
});

Meteor.publish('fogadas',function(){
    return Fogadas.find({});
});

Meteor.methods({
    // esemeny

    addEsemeny: function(nev,idopont,kategoria) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Esemeny.insert({
                nev:  nev,
                idopont: idopont,
                kategoria: kategoria
            });
        }
    },
    editEsemeny: function(id,nev,idopont,kategoria) {
       if(Meteor.user && Meteor.user().username == "admin"){
            Posts.update({ _id: id },
                { $set: {
                    nev:  nev,
                    idopont: idopont,
                    kategoria: kategoria
                }
            });
        }
    },
    removeEsemeny: function(id) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Esemeny.remove({
                _id:  id
            });
        }
    },
    // user

    adduser: function(nev,pontszam) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Meteor.users.insert({
                username:  nev,
                pontszam: pontszam
            });
        }
    },
    edituser: function(id,nev,pontszam) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Meteor.users.update({ _id: id },
                { $set: {
                    username: nev,
                    pontszam: pontszam
                }
                });
        }
    },
    removeuser: function(id) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Meteor.users.remove({
                _id:  id
            });
        }
    },

    // verseny

    addVerseny: function(esemenyId,userId1,userId2,eredmeny,kategoria) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Verseny.insert({
                esemeny_id:  esemenyId,
                user_id1: userId1,
                user_id2: userId2,
                eredmeny: eredmeny,
                kategoria: kategoria
            });
        }
    },
    editVerseny: function(id,esemenyId,userId1,userId2,eredmeny,kategoria) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Verseny.update({ _id: id },
                { $set: {
                    esemeny_id:  esemenyId,
                    user_id1: userId1,
                    user_id2: userId2,
                    eredmeny: eredmeny,
                    kategoria: kategoria
                }
                });
        }
    },
    removeVerseny: function(id) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Verseny.remove({
                _id:  id
            });
        }
    },

    // fogadas

    addFogadas: function(userId,versenyId,fogadas) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Fogadas.insert({
                user_id: userId,
                verseny_id: versenyId,
                fogadas: fogadas
            });
        }
    },
    editFogadas: function(id,userId,versenyId,fogadas) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Verseny.update({ _id: id },
                { $set: {
                    user_id: userId,
                    verseny_id: versenyId,
                    fogadas: fogadas
                }
                });
        }
    },
    removeFogadas: function(id) {
        if(Meteor.user && Meteor.user().username == "admin"){
            Verseny.remove({
                _id:  id
            });
        }
    }
});