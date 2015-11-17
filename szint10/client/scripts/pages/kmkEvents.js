Template.kmkEvents.events({
    'getConvStarted': function(){
        event.preventDefault();
        return Session.get('bool');
    }
});