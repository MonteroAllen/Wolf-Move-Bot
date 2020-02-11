const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'dtilt',
    description: 'Down tilt Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[5].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[5].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[5].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[5].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[5].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[5].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfDtilt.gif"}
            }});
            return
        }
    };