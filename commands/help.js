const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  
  
      if(args[0] === "lockdown"){
          let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💰» Zarada", "Sve komande za Zaradu")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".daily", "Dobijate 500 <:Bitcoin:971362942924783616> Svakih 24h")
       message.channel.send(embed)
}
  
        if(args[0] === "anti"){
          let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💰» Zarada", "Sve komande za Zaradu")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".daily", "Dobijate 500 <:Bitcoin:971362942924783616> Svakih 24h")
       message.channel.send(embed1)
}
  
        if(args[0] === "server"){
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💰» Zarada", "Sve komande za Zaradu")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".daily", "Dobijate 500 <:Bitcoin:971362942924783616> Svakih 24h")
       message.channel.send(embed3)
}
  
  if (!args[0]){
        let embed9 = new Discord.RichEmbed()
    .setColor("RED")
  .setAuthor('CzvVesti | Security', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("🔐» Lockdown", "Komanda: s!help lockdown") 
  .addField("🚫» Anti", "Komanda: s!help anti") 
  .addField("💻» Server", "Komanda: s!help server") 
    
  message.channel.send(embed9)
  }
  
}

module.exports.help = {
  name: "help",
  aliases: ["pomoc", "komande"],
  perm: "",
  role: "",
  group: "economy"
}
