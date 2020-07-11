const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Get information about any command!',
    arguments: [
        'commands',
    ],
    args: true,
    noargs: true,
    usage: '<command arguments>\nAnything between [] is required, and anything between <> is optional\n' +
        'A more descriptive guide can be read by using the `-guide` command',
    cooldown: 5,
    category: 'testing',
    execute(message, args) {
        const commandNames = [

        ];
        const categories = [{
                'name': 'testing',
                'commands': [

                ],
            },
            {
                'name': 'interaction',
                'commands': [

                ],
            },
        ];
        const { commands } = message.client;
        commandNames.push(commands.map(command => command.name).join(', '));
        const embed = new Discord.MessageEmbed()
        if (!args.length) {
            embed.addFields({
                name: `**Name**: ${this.name}`,
                value: `**Description:** ${this.description}\n
                    **Usage:** ${prefix}${this.name} ${this.usage}\n
                    **Arguments:** ${this.arguments.join(', ')}\n
                    **Cooldown:** ${this.cooldown || 3} second(s)\n`
            });
            message.channel.send({ embed })
                .catch(error => console.error(error, embed));
        } else if (args[0] === 'commands') {
            embed.setTitle('Command list');
            for (const commandCategory of categories) {
                for (let i = 0; i < categories.length; i++) {
                    if (categories[i].name === commandCategory.name) {
                        categories[i].commands.push((commands.map(function(command) {
                            if (command.category === commandCategory.name) {
                                return command.name;
                            }
                        }).join(' ')));
                    }
                }
                embed.addField(`**${commandCategory.name}**`, `${commandCategory.commands}`);
            }
            author.send({ embed })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        } else {
            const name = args[0].toLowerCase();
            const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

            if (!command) {
                return message.reply('that\'s not a valid command!');
            }
            let info = '';
            if (command.description) {
                info += (`**Description:** ${command.description}\n`);
            }
            if (command.arguments) {
                info += (`**Arguments:** ${command.arguments.join(', ')}\n`);
            }
            if (command.usage) {
                info += (`**Usage:** ${prefix}${command.name} ${command.usage}\n`);
            }
            if (command.aliases) {
                info += (`**Aliases:** ${command.aliases.join(', ')}\n`);
            }
            if (command.cooldown) {
                info += (`**Cooldown:** ${command.cooldown || 3} second(s)\n`);
            }
            const embed = new Discord.RichEmbed()
                .addField(`**Name:** ${command.name}`, info);
            message.channel.send(embed);
        }
    },
};