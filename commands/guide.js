const Discord = require('discord.js');
module.exports = {
    name: 'guide',
    description: 'The quick command usage guide for this bot',
    args: false,
    cooldown: 2,
    category: 'testing',
    execute(message) {
        const dict = '**[]**: anything between these is a required input, usually directly behind the prefix\n' +
            '**<>**: anything between these is optional and changes the command output a bit' +
            'Make sure to read the text between them, since that is what is expected as input. example usages for each command are given';
        const text = 'To use any command, just type the prefix and the commandname right after like this `-[command name]`\n' +
            'Make sure you don\'t type anything else but the command in your message otherwise it might give an error or not work' +
            'You can get a full list of all commands with the `-help commands` command\n' +
            'Sometimes it\'s possible to enter another word behind a command, called an argument.\n' +
            'This will change the command output\n' +
            'Examples of this are given when you use the `-help` command with the command name and the argument\n' +
            'Like this `-help [command name] <argument>`\n' +
            'You can see a list of all possible arguments and if it\'s possible to use the command without arguments\n' +
            'Use`-help [command name]` to see this list\n' +
            'When an argument just reads user, you can perfectly just type the name without mentioning';
        const embed = new Discord.MessageEmbed()
            .setTitle('The baby jesus command guide!')
            .addField('Quick dictionary', dict)
            .addField('Basic usage', text);
        message.author.send({ embed });
    },
};