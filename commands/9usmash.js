const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'usmash',
    description: 'Up Smash Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[8].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[8].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[8].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[8].Advantage,
                    },
                    {
                        name: 'Shieldstun',
                        value: wolfMoves[8].Shieldstun,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[8].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[8].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfUSmash.gif"}
            }});
            return
        }
    };