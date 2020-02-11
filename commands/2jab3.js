const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'jab',
    description: 'Jab 3 Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[2].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[2].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[2].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[2].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[2].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[2].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfJab3.gif"}
            }});
            return
        }
    };