$(document).ready(function () {
    $.getJSON('files\8dSongs.json', function (data) {
        songData(data,"songsHolder");
    });
    $.getJSON('files/8dShorts.json', function (data) {
        songData(data,"shortsHolder");
    });
    $.getJSON('files/coding.json', function (data) {
        songData(data,"codingHolder");
    });
    $.getJSON('files/gaming.json', function (data) {
        songData(data,"gamesHolder");
    });
    $.getJSON('files/playlists.json', function (data) {
        songData(data,"playlistHolder");
    });
    $('#searchFilter').on('keyup',function(){
        var songsHolder = $('.songName');
        let filterValue = $('#searchFilter').val();
        filterSongs(songsHolder,filterValue);
    });
    function filterSongs(songsList,filterValue){
        for (let i = 0; i < songsList.length; i++) {
            var songName = songsList[i].innerHTML ;
            if(!songName.toLowerCase().includes(filterValue)){
            let parent = $(songsList[i]).parent();
            $(parent).parent().parent().hide();
            }
            else{
                let parent = $(songsList[i]).parent();
                $(parent).parent().parent().show();
            }
        }
    }
    function songData(data,className){
        data.Songs.forEach(song => {
            $(`.${className}`).append(`<td><div class="card bg-dark" style="width: 15rem;height: 15rem;"><div class="card-img-top">${song.iframe}</div><div class="card-body"><h5 class="card-text text-light songName">${song.SongName}</h5></div></div></td>`);
        });
    }
})