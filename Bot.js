const Discord = require('discord.js');
const client = new Discord.Client();

clien.Login("NTYzMTc4NTg5ODEwNDU4NjI1.XOXY-g.ksfdNwbwU9a2Yz_v8slHv8bZvFI");

client.on('ready', message => {
   Console.log ("the bot is logged in!");
  });

client.on('message' , messege => {
  if(message.author.bot)
   return;

if(message.content.toLower.Case() === 'hello')
 message.channel.send("hey!");
});
