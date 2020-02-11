const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'nair',
    description: 'nair Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[10].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[10].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[10].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[10].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[10].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[10].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[10].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfNair.gif"}
            }});
            return
        }
    };