const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'firewolf',
    description: 'Flash Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[17].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[17].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[17].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[17].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[17].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[17].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[17].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfFireWolf.gif"}
            }});
            return
        }
    };