const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'bair',
    description: 'back air Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[12].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[12].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[12].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[12].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[12].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[12].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[12].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfBair.gif"}
            }});
            return
        }
    };