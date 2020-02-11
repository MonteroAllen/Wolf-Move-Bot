const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'laser',
    description: 'Neutral Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[15].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[15].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[15].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[15].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[15].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[15].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfBlaster.gif"}
            }});
            return
        }
    };