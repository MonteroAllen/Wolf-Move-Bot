//Javascript
const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const { join } = require('path');


const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//Pulling commandlist


//Client On Ready
client.on('ready', () => {
    console.log('Logged in as PoiBotJs!');
    client.user.setPresence({game: {name: "with Wolf's framedata" }, status: 'idle'})
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help' || command === "commands") {
        message.channel.send(commandList1)
    }

    
    if (command === 'jab1') {
        client.commands.get('jab1').execute(message,args);
        return
    }; if (command === 'jab2') {
        client.commands.get('jab2').execute(message,args);
        
    }; if (command === 'jab3') {
        client.commands.get('jab').execute(message,args);

    }; if (command === 'ftilt') {
        client.commands.get('ftilt').execute(message,args);
        return
    }; if (command === 'utilt') {
        client.commands.get('utilt').execute(message,args);
        return
    }; if (command === 'dtilt') {
        client.commands.get('dtilt').execute(message,args);
        return
    }; if (command === 'da' || command === "dashattack") {
        client.commands.get('dashAttack').execute(message,args);
        return
    }; if (command === 'fsmash' || command === "forwardsmash") {
        client.commands.get('fsmash').execute(message,args);
        return
    }; if (command === 'dsmash' || command === "downsmash") {
        client.commands.get('dsmash').execute(message,args);
        return
    }; if (command === 'usmash' || command === "upsmash") {
        client.commands.get('usmash').execute(message,args);
        return
    }; if (command === 'nair') {
        client.commands.get('nair').execute(message,args);
        return
    }; if (command === 'bair') {
        client.commands.get('bair').execute(message,args);
        return
    }; if (command === 'fair') {
        client.commands.get('fair').execute(message,args);
        return
    }; if (command === 'uair') {
        client.commands.get('uair').execute(message,args);
        return
    }; if (command === 'dair') {
        client.commands.get('dair').execute(message,args);
        return
    }; if (command === 'laser' || command === "blaster" || command === "neutralb") {
        client.commands.get('laser').execute(message,args);
        return
    }; if (command === 'flash' || command === 'sideb') {
        client.commands.get('flash').execute(message,args);
        return
    }; if (command === 'firewolf' || command === "upb" || command === 'poi') {
        client.commands.get('firewolf').execute(message,args);
        return
    }; if (command === 'shine' || command === "downb") {
        client.commands.get('shine').execute(message,args);
    } else {
        message.channel.send("Please Enter a valid command")
    } 

});


client.login(config.token)
