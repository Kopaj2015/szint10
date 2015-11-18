Template.adminUser.events({
    'submit .new-user': function (event) {
        event.preventDefault();

        var nev = event.target.nev.value;
        var pontszam = event.target.pontszam.value;

        Meteor.call('adduser',nev,pontszam);

        event.target.nev.value = '';
        event.target.pontszam.value = '';
    },
    'click .remove':function(event){
        event.preventDefault();
        Meteor.call('removeUser',this._id);
    },
    'click .edit':function(event){
        event.preventDefault();
        $('#nev .editable').editable('toggleDisabled');
        $('#pontszam .editable').editable('toggleDisabled');
    },
    'click .delete': function () {
        Meteor.call('removeuser',this._id);
    }
});


Template.adminUser.helpers({
    getUser: function() {
        return Meteor.users.find({});
    },
    updateUser: function() {
        var id = this._id;
        return function (res, val) {
            Meteor.call('edituser',id,val);
        }
    }
});
