const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'shine',
    description: 'utilt Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[18].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[18].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[18].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[18].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[18].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[18].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfReflectorStart.gif"}
            }});
            return
        }
    };