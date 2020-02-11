const Discord = require('discord.js');
const wolfMoves = require('../moves/wolf')


module.exports = {
    name: 'dair',
    description: 'down air Wolf',
    execute(message, args) {
            message.channel.send({embed: {
                color: 16777215, 
                description: wolfMoves[14].Moves,
                fields: [
                    {
                        name: 'Active on Frame(s)',
                        value: wolfMoves[14].Startup,
                    },
                    {
                        name: 'FAF',
                        value: (parseInt(wolfMoves[14].TotalFrames) + 1),
                    },
                    {
                        name: 'Landing Lag',
                        value: wolfMoves[14].LandingLag,
                    },
                    {
                        name: 'On Shield',
                        value: wolfMoves[14].Advantage,
                    },
                    {
                        name: 'Base Damage',
                        value: wolfMoves[14].BaseDamage,
                    },
                    {
                        name: 'Notes',
                        value: wolfMoves[14].Notes,
                    },
                ],
                image: {url: "https://ultimateframedata.com/hitboxes/wolf/WolfDair.gif"}
            }});
            return
        }
    };