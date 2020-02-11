const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'dsmash',
    description: 'Down Smash Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[9].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[9].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[9].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[9].Advantage,
                    },
                    {
                        name: 'Shieldstun',
                        value: wolfMoves[9].Shieldstun,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[9].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[9].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfDSmash.gif"}
            }});
            return
        }
    };