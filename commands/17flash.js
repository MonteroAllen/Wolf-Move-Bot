const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'flash',
    description: 'Flash Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[16].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[16].Startup,
                    },
                    {
                        name: 'FAF',
                        value: 'N/A'
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[16].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[16].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[16].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[16].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfWolfFlash.gif"}
            }});
            return
        }
    };