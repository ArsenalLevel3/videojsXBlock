function wwj_MarkerReached(marker){
    //console.log("wwj_MarkerReached");
    return "wwj_MarkerReached";
}

function on_track_point(runtime, element) {
        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(element, 'add_watched_times'),
            data: JSON.stringify({watched: true}),
            success: function(result) {
                console.log("watched");
                console.log(result);
                //watched_status.text(result.watched);
            }
        });
}
 

function init_myvideo(player,runtime, element){

   player.markers({

    //onMarkerReached: function(markers) {
    //    alert("hello");
    //  },
   breakOverlay:{
      display: true
   },
   onMarkerReached: function(marker){
        console.log(marker.time);
        //sent post 
        on_track_point(runtime, element);
   },

 
     markers: [
      {
         time: 9.5,
         text: "1" 
      },
      {
         time: 16,
         text: "2"
      },
      {
         time: 23.6,
         text: "3"
      },
      {
         time: 28,
         text: "4"
      }
   ]
    });
    


}
