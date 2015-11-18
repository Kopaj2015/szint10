Template.kmkEvents.helpers({
    'myBets': function(user_id){
        Meteor.Fogadas.find({ "Fogadas.user_id" : user_id });
    },
    'allFogadas': function(){
        return Fogadas.findAll();
    }
});
Template.adminEsemeny.events({
    'submit .new-bet': function (event) {
        event.preventDefault();
        //TODO bet mentese
    },
});