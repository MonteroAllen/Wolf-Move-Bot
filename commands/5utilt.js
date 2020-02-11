const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'utilt',
    description: 'utilt Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[4].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[4].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[4].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[4].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[4].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[4].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfUtilt.gif"}
            }});
            return
        }
    };