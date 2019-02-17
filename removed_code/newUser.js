var socket = io();

socket.on('connect', function(){
    
    const users = require('../server/utils/users');
    var params = jQuery.deparam(window.location.search);
    socket.emit('join', params, function(err){
        
        if(err){
            alert(err);
            window.location.href = '/';
        }else{
            console.log('No err');
        };
    });
    if(!users.isInList(params.name)){
        
    }
    else{

    }
});

socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});