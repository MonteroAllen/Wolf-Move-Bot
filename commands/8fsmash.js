const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'fsmash',
    description: 'Forward Smash Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[7].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[7].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[7].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[7].Advantage,
                    },
                    {
                        name: 'Shieldstun',
                        value: wolfMoves[7].Shieldstun,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[7].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[7].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfFSmash.gif"}
            }});
            return
        }
    };