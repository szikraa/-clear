

//Ez a parancs arra való hogy a /clear parancsot használva 0-100 ig üzenetet töröl ki!FONTOS:Csak 14 napon belüli elküldött üzeneteket lehet törölni!


const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');


// Construct a new SlashCommandBuilder
const data = new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Deletes a specified amount of messages')
    .addIntegerOption(option => 
        option.setName('amount')
            .setDescription('The number of messages to delete')
            .setRequired(true)
    );

// A parancs fügvénye!
async function execute(interaction) {
  const amount = interaction.options.getInteger('amount')


  if (amount <= 0 || amount > 100) {
    return interaction.reply('Kérlek, adj meg egy számot 1 és 100 között.');
  }

  const messages = await interaction.channel.messages.fetch({ limit: amount });
  interaction.channel.bulkDelete(messages);

  console.log('Megy a /clear parancs!');
  return interaction.reply(`Törölve lett ${amount} üzenet.`);
}

module.exports = {
    data: data,
    execute: execute
};