const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'uair',
    description: 'up air Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[13].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[13].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[13].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[13].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[13].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[13].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[13].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfUair.gif"}
            }});
            return
        }
    };