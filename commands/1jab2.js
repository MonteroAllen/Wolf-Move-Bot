const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'jab2',
    description: 'Jab 2 Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[1].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[1].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[1].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[1].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[1].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[1].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfJab2.gif"}
            }});
            return
        }
    };    