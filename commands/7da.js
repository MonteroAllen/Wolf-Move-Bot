const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'dashAttack',
    description: 'Dash Attack Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[6].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[6].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[6].TotalFrames) + 1),
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[6].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[6].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[6].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfDashattack.gif"}
            }});
            return
        }
    };