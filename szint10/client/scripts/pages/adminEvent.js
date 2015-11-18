Template.adminEsemeny.events({
    'submit form': function(event) {
        event.preventDefault();
        if(event.target.nev.value !== '' && event.target.idopont.value !== '' && event.target.kategoria.value !== '') {
            Meteor.call('addEsemeny',
                event.target.nev.value,
                event.target.idopont.value,
                event.target.kategoria.value
            );
            event.target.nev.value = '';
            event.target.idopont.value = '';
            event.target.kategoria.value = '';
        }
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


Template.posts.helpers({
    getPosts: function() {
        return Posts.find({}, { sort: {createdAt: -1}});
    },
    updatePost: function() {
        var id = this._id;
        return function (res, val) {
            Meteor.call('editPost',id,val);
        }
    },
    getDisplayName: function(userId) {
        var user = Meteor.users.findOne({_id: userId});
        if(user) {
            return user.profile.displayName ? user.profile.displayName : user.username;
        }
        return 'A ghost...';
    },
    ownPost: function(postUserId) {
        if(Meteor.user() && Meteor.user()._id == postUserId) {
            return true;
        }
        return false;
    }
});
