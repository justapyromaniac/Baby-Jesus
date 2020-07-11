/* eslint-disable no-mixed-spaces-and-tabs */
const Discord = require('discord.js');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
module.exports = {

    name: 'pat',
    description: 'Pat a user',
    arguments: [
        'aggressively',
    ],
    args: true,
    noargs: false,
    aliases: [
        'patters',
    ],
    cooldown: 3,
    usage: '<name> <argument>',
    category: 'interaction',
    execute(message, args) {
        let rndgif;
        let rndMessage;
        let filePath;
        let type = args[args.length - 1];
        if (this.arguments.includes(type)) {
            args.pop();
        }
        let messages = [];
        let gifs = [];
        const mentionedName = args.join(' ');
        const user = message.author.username;
        switch (type) {
            case 'aggressively':
                messages = [
                    `${user} pats ${mentionedName} aggressively`,
                    `${user} rubs ${mentionedName}'s head roughly`,
                ];
                gifs = [
                    '1.gif',
                ];
                filePath = `interactions\\pats\\aggressive pats\\`;
                break;
            default:
                messages = [
                    `${user} pats ${mentionedName}`,
                    `${user} rubs ${mentionedName}'s head`,
                ];
                gifs = [
                    '1.gif',
                    '2.gif',
                    '3.gif',
                ];
                filePath = `interactions\\pats\\`;
        }
        rndgif = gifs[getRndInteger(0, gifs.length)];
        rndMessage = messages[getRndInteger(0, messages.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle(rndMessage)
            .attachFiles(
                [
                    filePath + rndgif,
                ])
            .setImage(`attachment://${rndgif}`);
        message.channel.send({ embed });
    },
};