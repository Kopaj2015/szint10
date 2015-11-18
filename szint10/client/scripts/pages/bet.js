Template.kmkEvents.helpers({
    'myBets': function(user_id){
        Meteor.Fogadas.find({ "Fogadas.user_id" : user_id });
    },
    'allVerseny': function(){
        Meteor.Verseny.insert({ esemeny_id: "1", user_id1: "1", user_id2: "2", eredmeny: "1", kategoria: "1" });
        Verseny.findAll();
    }
});

function newBet(esemeny_id, value){
    console.log(esemeny_id + " " + value);
//Update fogadas, ahol a user_id az act user-e és az esemeny_id a kapott, value-ra allitani a fogast erteket
//    Fogadas.update();
}