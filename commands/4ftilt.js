const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'ftilt',
    description: 'ftilt Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[3].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[3].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[3].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[3].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[3].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[3].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfFtilt.gif"}
            }});
            return
        }
    };