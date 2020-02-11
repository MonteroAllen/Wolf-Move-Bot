const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'fair',
    description: 'forward air Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[11].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[11].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[11].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[11].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[11].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[11].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[11].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfFair.gif"}
            }});
            return
        }
    };