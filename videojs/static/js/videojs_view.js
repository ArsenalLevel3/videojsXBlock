/* Javascript for videojsXBlock. */
function videojsXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    if(element.innerHTML) element = $(element);
    
    var video = element.find('video:first');
    //videojs(video.get(0), {playbackRates:[0.75,1,1.25,1.5,1.75,2]}, function() {});
    myvideo = videojs(video.get(0), {playbackRates:[0.75,1,1.25,1.5,1.75,2]}, function() {});
    //my function
    wwj_view();
    //the js file should load before
    init_myvideo(myvideo,runtime, element);
    //myvideo.addEvent('ready', function() {
    //    myvideo.addEvent('finish', on_track_point);
    //});

   
   //add the event on track point 
}

function wwj_view(){
    //test js
    console.log("my view running")

}
