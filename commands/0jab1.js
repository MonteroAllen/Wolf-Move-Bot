const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')

module.exports = {
    name: 'jab1',
    description: 'Jab 1 Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[0].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[0].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[0].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[0].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[0].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[0].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfJab1.gif"}
            }});
            return
        }
    };    