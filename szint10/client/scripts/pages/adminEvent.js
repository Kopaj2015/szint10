Template.adminEsemeny.events({
    'submit .new-event': function (event) {
        event.preventDefault();

        var nev = event.target.nev.value;
        var idopont = event.target.idopont.value;
        var kategoria = event.target.kategoria.value;

        Meteor.call('addEsemeny',nev,idopont,kategoria);

        event.target.nev.value = '';
        event.target.idopont.value = '';
        event.target.kategoria.value = '';
    },
    'click .remove':function(event){
        event.preventDefault();
        Meteor.call('removeEsemeny',this._id);
    },
    'click .edit':function(event){
        event.preventDefault();
        $('#nev .editable').editable('toggleDisabled');
        $('#idopont .editable').editable('toggleDisabled');
        $('#kategoria .editable').editable('toggleDisabled');
    }
});


Template.adminEsemeny.helpers({
    getEsemeny: function() {
        return Esemeny.find({});
    },
    updateEsemeny: function() {
        var id = this._id;
        return function (res, val) {
            Meteor.call('editEsemeny',id,val);
        }
    }
});
