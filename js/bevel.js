function Run1() {
	Utils.run_command("xdg-open http://blankonlinux.or.id");
}
function Run2() {
	Utils.run_command("xdg-open http://panduan.blankonlinux.or.id");
}
function Run3() {
	Utils.run_command("xdg-open https://facebook.com/groups/blankonlinux");
}
function Run4() {
	Utils.run_command("xdg-open https://twitter.com/BlankOnLinux/");
}
function Run5()) {
	Utils.run_command("xdg-open https://github.com/apandada1/typhoon/");
}
function Run6()) {
	Utils.run_command("xdg-open http://www.gnu.org/licenses/gpl.html");
}
function Run7()) {
	Utils.run_command("xdg-open http://getstormcloud.com/");
}
function Run8()) {
	Utils.run_command("xdg-open https://github.com/consindo/stormcloud/tree/e7ef8e131466d477075e92337e502c3cac004ee2");
}
function Run9()) {
	Utils.run_command("xdg-open https://twitter.com/consindo");
}
function Run10()) {
	Utils.run_command("xdg-open https://twitter.com/apandada1");
}
function Run11()) {
	Utils.run_command("xdg-open http://adamwhitcroft.com/climacons/");
}
function Run12()) {
	Utils.run_command("xdg-open https://twitter.com/AdamWhitcroft");
}
function Run13()) {
	Utils.run_command("xdg-open http://weather.yahoo.com");
}
function Run14()) {
	Utils.run_command("xdg-open https://twitter.com/zdr0id");
}
function Run15()) {
	Utils.run_command("xdg-open https://sites.google.com/site/typhoonweatherapp/help-and-how-to-1/howtomaketyphoonavailableineveryworkspace");
}

//mocp
function MocpStart(){Utils.run_command("audacious");}

/*function MocpState(){
	document.getElementById("MocpTitle2").innerHTML = Utils.run_command('mocp -Q %title');
}*/

/*function MocpBackward(){Utils.run_command("audacious -r");}
function MocpPause(){Utils.run_command("audacious -u");}
function MocpPlay(){
	if(Utils.run_command("audacious") == false){
		Utils.run_command("audacious");
		Utils.run_command("audacious -p");
	}
	else{
		Utils.run_command("audacious -p");
	}
}*/
function MocpPlay(){Utils.run_command("audacious -p");}
function MocpStop(){Utils.run_command("audacious -s");}
function MocpForward(){Utils.run_command("audacious -f");}
function MocpBackward(){Utils.run_command("audacious -r");}
function MocpPause(){Utils.run_command("audacious -u");}
function MocpOpen(){Utils.run_command("audacious");}
/*function MocpRepeat(){Utils.run_command("audacious -r");}*/
/*function MocpShuffle(){Utils.run_command("audacious -s");}*/

/*$(document).ready(function() {
	$('#mocp').on('click', '#repeat', function(){
		if($('#repeat').hasClass("selected")){ $('#repeat').removeClass("selected");}
		else{$('#repeat').addClass("selected");}
	});
	
	$('#mocp').on('click', '#shuffle', function(){
		if($('#shuffle').hasClass("selected")){ $('#shuffle').removeClass("selected");}
		else{$('#shuffle').addClass("selected");}
	});
	
});*/

// gnome control center

function RunWallpaper() {
	Utils.run_command("gnome-control-center background");
}
function RunAccount() {
	Utils.run_command("gnome-control-center user-accounts");
}
function RunSound() {
	Utils.run_command("gnome-control-center sound");
}
function RunInfo() {
	Utils.run_command("gnome-control-center info");
}
function RunBluetooth() {
	Utils.run_command("gnome-control-center bluetooth");
}
function RunRegional() {
	Utils.run_command("gnome-control-center region");
}
function RunKeyboard() {
	Utils.run_command("gnome-control-center keyboard");
}
function RunPower() {
	Utils.run_command("gnome-control-center power");
}
function RunDate() {
	Utils.run_command("gnome-control-center datetime");
}
function RunDisplay() {
	Utils.run_command("gnome-control-center display");
}
function RunMouse() {
	Utils.run_command("gnome-control-center mouse");
}
function RunNetwork() {
	Utils.run_command("nm-connection-editor");
}
function RunOnline() {
	Utils.run_command("gnome-control-center online-accounts");
}
function RunPrinter() {
	Utils.run_command("system-config-printer");
}
function RunShare() {
	Utils.run_command("gnome-control-center sharing");
}
