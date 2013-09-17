var PlayersPerGroup = $('#PlayersPerGroup').val();
var numOfPlayers = 0;
var numOfGroups = 0;
var names = new Array();
var groups = new Array();
var groupCounter = new Array();

var i,g,r;

var players;

$( "#divideGroupsBtn" ).click(function() {

	$('#groups').html('');
	PlayersPerGroup = $('#PlayersPerGroup').val();

 	numOfPlayers = players.length;
	numOfGroups = Math.ceil(numOfPlayers / PlayersPerGroup);

	for(i=0;i<numOfGroups;i++) {
		groups[i] = (i+1);
		groupCounter[i] = 0;
	}

	for(i=0;i<numOfPlayers;i++) {
		dividePlayers(numOfPlayers);
	}

	for(i=0;i<numOfGroups;i++) {
		$('#groups').append('<h3>Gruppe '+groups[i]+'</h3>');
		for(g=0;g<numOfPlayers;g++) {
			if(players[g].group == (i+1)) {
				$('#groups').append('<p>'+names[g]+'</p>');
			}
		}

	}
  	
});


function dividePlayers(numOfPlayers) {

	r = Math.floor(groups.length * Math.random());
	if(!(groupCounter[r]>=PlayersPerGroup)) {
		players[i].group = groups[r];
		groupCounter[r]++;
	}
	else {
		dividePlayers(numOfPlayers);
	}
}


function importGSS(json) {
	//$('#players').html('<br>');

    for (i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];
        players = json.feed.entry;
        names[i] = entry.gsx$navn.$t;
        $('#players').append('<p>' + entry.gsx$navn.$t + '</p>');
    }

    $('#numberOfPlayers').html(json.feed.entry.length);
}

