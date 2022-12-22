const fs = require("node:fs");
const path = require("node:path")
const { REST, Routes, Client, GatewayIntentBits, SlashCommandBuilder, Collection } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

// .env
require("dotenv").config();
const botToken = process.env.TOKEN;
const clientId = process.env.CLIENT_ID;

// Command Handler
client.commands = new Collection();

const commands = []
const cmdsPath = path.join(__dirname, 'commands');
const cmdfiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));

for (const file of cmdfiles) {
    const filePath = path.join(cmdsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());

    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        console.log(`Command "${command.data.name}" loaded!`);
    } else {
        console.log(`!: Command ${filePath} is missing a required "data" or "execute" property.`);
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(botToken);

// Deploying commands
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();

// On Interaction
client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName); 

    if (!command) {
        console.log(`Unknow command: ${interaction.commandName}`)
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content : "An error ocurred while executing the interaction", ephemeral: true})
    }
});

// Client Ready
client.on('ready', () => {
    console.log("Bot is ready!");
    console.log(`Logged as '${client.user.tag}'`);
})

// Login
client.login(botToken);