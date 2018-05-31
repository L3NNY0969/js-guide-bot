const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
    client.user.setActivity('JS lessons', {type: 'WATCHING'});
});

client.on('message', msg => {
    if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    const args = msg.content.split(' ').slice(1).join(' ');
    if (command === 'sinvite') return msg.channel.send('https://discord.gg/FEPNu3A');
    else if (command === 'invite') return msg.channel.send(n0pe);
});

client.login(process.env.TOKEN);
