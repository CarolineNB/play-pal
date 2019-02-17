function openStream(){
    const constraints = {
        video: true,
        audio: true
    };
      
    //const video = document.querySelector('video');
      
    return navigator.mediaDevices.getUserMedia(constraints);
}

function playStream(idVideoTag, stream){
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    console.log("playing streaming");
    // video.play();
    // video.onloadedmetadata = function(e) {
    //     video.play();
    //   };
}

// openStream()
// .then(stream => playStream('localStream',stream));

const peer = new Peer({key: 'lwjd5qra8257b9'});

//when connected to server, have id
peer.on('open', id=> $('#my-peer').append(id));

//caller
jQuery('#btnCall').click(()=>{
    const id = jQuery("#remoteId").val();
    openStream()
    .then(stream =>{
        //open our stream 1st
        playStream('localStream',stream);
        const call = peer.call(id, stream);
        //then call another person
        call.on('stream',remoteStream => playStream('remoteStream', remoteStream));
    }).catch((e)=> console.log(e));
    peer.call(id,)
});

//receiver
peer.on('call', call =>{
    openStream()
    .then(stream =>{
        //answer the call
        call.answer(stream);
        //open our stream 
        playStream('localStream',stream);
        //wait for the other person to on our answer and on their stream here
       call.on('stream',remoteStream => playStream('remoteStream', remoteStream));

    }).catch((e)=> console.log(e));
});

// jQuery("#fill-form").on('submit', function(e)=>{
//     e.preventDefault();
// });