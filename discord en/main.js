const Discord = require('discord.js');
const client = new Discord.Client();
const ayar = require('./ayar.json');

var prefix = ayar.prefix;

client.login('ODM4Nzk4NDUwMTI3Nzk4MzMy.YJAV7g.Ote-YuR5OyxtG3ptyWjqUPproJw');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'on') {
    msg.author.send('on')
    msg.channel.send('on');
  }
});
client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'off') {
    msg.delete()
    msg.author.send('loff')
    msg.channel.send('loff');
  }
});
client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'on') {
    msg.delete()
  }
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'off') {
      msg.delete()
    }
  });
client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'coder who') {
    msg.delete()
    msg.reply('ssscute#4465 , github: https://github.com/ssskkwii');
  }
});
client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'hello') {
      msg.reply('hello!');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'delete') {
      msg.delete()
      msg.reply('no');
    }
  });
  client.on('message', message => {
    if (message.content.toLocaleLowerCase() === prefix + 'avatar') {
      message.channel.send(message.author.displayAvatarURL());
    }
  });
  client.on('message', message => {
    if(message.content.toLocaleLowerCase() === 'what the fuck') {
      message.delete()
      message.reply('delete')
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing tar') {
      msg.reply('(tar.xz) tar Jxvf folder name , (tar.bz2) tar xvjf folder name , (tar.gz) tar xvzf folder name (tbz2) tar xvjf folder name (tgz) tar xvzf folder name ()');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing bz2') {
      msg.reply('bunzip2 folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing rar') {
      msg.reply('unrar x folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing gz') {
      msg.reply('gunzip folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing zip') {
      msg.reply('unrar folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing Z') {
      msg.reply('uncompress folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'installing 7z') {
      msg.reply('7z x folder name');
    }
  });
  client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === prefix + 'invite') {
      msg.delete()
      msg.author.send('https://discord.com/api/oauth2/authorize?client_id=843563249726390322&permissions=2048&scope=bot')
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=843563249726390322&permissions=2048&scope=bot');
    }
  });
    client.on('message', msg => {
    if (msg.content.toLocaleLowerCase() === 'help') {
        msg.delete()
      msg.reply('`lban name `, `lkick name` , installing ? , invite');
    }
  });
    client.on('message', async message => {
  if (!message.guild) return;
  if (message.content === prefix + 'join') {
    message.delete()
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.channel.send('You need to join a voice channel first!');
    }
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('lkick')) {
    message.delete()
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to kick!");
    }
  }
});
  client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('lban')) {
    message.delete()
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to ban!");
    }
  }
});