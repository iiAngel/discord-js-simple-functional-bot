# discord-js-simple-functional-bot

I made this repository for making a bot easily or simply starting with it.

## Resources

For making this bot we are gonna use <a href="https://nodejs.org/en/">Node.js</a>
make sure you install the 'Current' option which is the more stable currently

## Creating your bot

go to <a href="discord.com/developers/applications">Discord Developers Portal</a> and create a new application

<img src="img/new_application.png">

Put any name you like in your application

<img src="img/application_name.png">

and agree with the **Developer Terms of Service**

### Adding a bot

Once your bot has been created you are gonna go to the left bar and click the 'Bot' tab

<img src="img/click_bot.png">

And click on the button 'Add Bot'

<img src="img/add_bot.png">

Then you are going to reset your bot's Token

<img src="img/reset_token.png">

It's gonna throw a prompt that looks something like this:

<img src="img/reset_token2.png">

We are gonna be back into it later

## URL Generator

Go to the OAuth2 tab

<img src="img/oauth2.png">

In **Scopes** enable "bot" and "applications.commands"

<img src="img/bot_enable.png"><br>
<img src="img/applications_commands.png">

In **Permissions** enable the Perms do you like to have in your bot
im gonna add Administrator **(Not Recomended)** just for this tutorial

<img src="img/bot_perms.png">

In the bottom of the page you can now copy the invite URL for your bot

<img src="img/copy_url.png">

Paste it in your browser and follow this simple steps

1. Choose a server for your bot to be added
<img src="img/choose_server.png">
2. Click on continue and then click on authorize
<img src="img/authorize.png">
3. Now your bot is in your server!
<img src="img/bot_arrived.png">

## Running your bot

Clone this repository with <a href="https://git-scm.com/downloads">GIT Bash</a> following the next command: `$ git clone https://github.com/iiAngel/discord-js-simple-functional-bot.git`

<img src="img/gitbash.png">

then open your favorite IDE in my case im gonna use Visual Studio Code

Open the folder of the cloned repository

<img src="img/open_folder.png">

Open your Terminal and run the following command: `npm init`
Set the package details for your bot

Now install packages

```bash
# Install 'discord.js'
$ npm install discord.js
# Install 'dotenv'
$ npm install dotenv
```

go to `src/.env` and paste your bot token

<img src="img/reset_token3.png">

get back to OAuth2 tab and copy your Client ID

<img src="img/client_id.png"><br>

<img src="img/paste_token_client.png">

Now you have it!
Test your bot with `$ node .`

You can check `src/commands/ping.js` for an example to make your commands! 