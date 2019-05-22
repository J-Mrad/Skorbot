var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true});
logger.level = 'debug';
// Initialize Discord Client
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
////////////////////////////////////////////////////

bot.on('ready', function (evt) {
logger.info('Connected');
logger.info('Logged in as: ');
logger.info(bot.username + ' – (' + bot.id + ')');
bot.setPresence({game: {name: "with fire", type: 0}});
});
			
var rate = Array.apply(null, Array(facts.length)).map(Number.prototype.valueOf,0);

bot.on('message', function (user, userID, channelID, message, evt) {

	if( userID != 206229047951360000){ //not rat
	
		if (message.substring(0, 1) == '~') {
			var args = message.substring(1).split(' ');
			var cmd = args[0];

			args = args.splice(1);
			switch(cmd) {
				
				case 'hello':
				if( userID == 146366407766966273){
					bot.sendMessage({
						to: channelID,
						message: 'Hello Creator!'
					});
				}
				else if( userID == 107591614922240000){
					bot.sendMessage({
						to: channelID,
						message: 'Hello Bob!'
					});
				}
				else if( userID == 349836317615587329){
					bot.sendMessage({
						to: channelID,
						message: 'Hello Gr0g!'
					});
				}
				else if( userID == 293406420093632512){
					bot.sendMessage({
						to: channelID,
						message: 'Hello Nerodine!'
					});
				}
				else{
					bot.sendMessage({
						to: channelID,
						message: "Hello <@!" + userID + "> !"
					});
				}
				break;
				case 'delete':
				bot.sendMessage({
					to: channelID,
					message: 'Access Denied! Ctrl+Z'
				});
				break;
				
				case 'shift':
				if(message.substring(7).split(' ')[0] == 'delete'){
					
					bot.sendMessage({
					to: channelID,
					message: 'Fine ._.'
					});
				}
				break;
				
				case 'sudo':
				if(message.substring(6).split(' ')[0] == 'delete'){
					
					bot.sendMessage({
					to: channelID,
					message: 'Nice try.'
					});
				}
				else{
					bot.sendMessage({
					to: channelID,
					message: 'That only works on Alexa, mate!'
					});
				}
				break;
				
				case 'suck':
				bot.sendMessage({
					to: channelID,
					message: 'Im not japanese'
				});
				break;
				
				case 'sayhi':
				bot.sendMessage({
					to: channelID,
					message: 'hello'
					});
				break;
				
				case 'yesno':
				var x = Math.round(Math.random());
				var val = 'No';
				if(x == 1){
					val = 'Yes';
				}
				bot.sendMessage({
					to: channelID,
					message: val
					});
				break;
				
				
				case 'pick':
				var x = Math.round(Math.random());
				var args2 = message.substring(5).split(' or ');
				var val = args2[0];
				if(x == 1){
					val = args2[1];
				}
				bot.sendMessage({
					to: channelID,
					message: val
					});
				break;
				
				
				case 'advice':
				 bot.sendMessage({
					to: channelID,
					message: 'Don\'t take advice from robots'
					},function(){});
				break;
			}
		}
		if (message === "ping") {
			bot.sendMessage({
				to: channelID,
				message: "pong"
			});
		}
		
		if (message === "logo") {
			bot.uploadFile({
				to: channelID,
				file: "pics/Logomain.png"
			},function(){});
		}
		
		if (message.includes("rekt")) {
			bot.uploadFile({
				to: channelID,
				file: "pics/Rekt.png"
			},function(){});
		}
	
		if (message.includes("antoun")) {
			bot.uploadFile({
				to: channelID,
				file: "pics/antoun.jpg"
			},function(){});
		}
		
		if (message === "wow") {
			bot.sendMessage({
				to: channelID,
				message: 'FOR THE HORDE!'
			},function(){});
		}
	}
	
});