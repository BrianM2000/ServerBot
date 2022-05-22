const Discord = require('discord.js');
const bot = new Discord.Client();

const ping = require('minecraft-server-util');

const token = 'NzAyNTc5NDk5NDk3NDIzMDA5.XqCKtQ.jY91Vu60YSHsJM_H4Lqp0GUuSDs';

const PREFIX = '!';

const util = require('minecraft-server-util');

let id = "<@191377462632906752>";

const options = {
    sessionID: 1, 
    enableSRV: true 
};

bot.on('ready', () =>{
    console.log('Hello World!');
})

bot.on('message', msg=>{
    
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'Status':
            msg.channel.send('Fetching Status')
            
            
            ping('//Minecraft Server ip goes here', //Minecraft Server port goes here, (error, respond) =>{
                if(error) msg.channel.send('<@191377462632906752> The server is offline :(')
            
                ;

                var players;

                try{
                    players = respond.samplePlayers.map(obj => obj.name);
                }
                catch(error){
                    players = "no one :("
                }

                //console.log(players);

                const Embed = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', '//Minecraft Server ip goes here')
                .addField('Server Verison', respond.version)
                .addField('Online Players', respond.onlinePlayers)
                .addField('Players', players)
                .addField('Max Players', respond.maxPlayers)

                msg.channel.send(Embed)

                //console.log(respond)
            })
         break;

    }
})

bot.login(token);
