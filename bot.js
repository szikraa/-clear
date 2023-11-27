
const token ="";
let {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});
client.on("ready", () =>{
    console.log("MEGY A KARDENN!");
});
client.login(token);





//ÚJ SCRIPT EZ ARRA JÓ HOGY A COMMANDS MAPÁT IS INDÍTSA EL!

const fs = require('fs');
const path = require('path');

// Megnyitja a 'commands' mappát
fs.readdir('./commands', (err, files) => {
  if (err) {
    return console.log('Hiba történt a mappa megnyitása közben: ' + err);
  }

  // Végigmegy a mappában lévő összes fájlon
  files.forEach(file => {
    // Ellenőrzi, hogy a fájl JavaScript fájl-e
    if (path.extname(file) === '.js') {
      // Betölti és futtatja a JavaScript fájlt
      try {
        require(`./commands/${file}`);
        console.log(`A ${file} fájl sikeresen lefutott.`);
      } catch (err) {
        console.log(`Hiba történt a ${file} fájl futtatása közben: ` + err);
      }
    }
  });
});


