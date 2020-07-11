module.exports =
{

	name: 'ping',
	description: 'Get the api response time of discord',
	args: false,
	cooldown: 5,
	category: 'testing',
	execute(message)
	{
		//	if (args[0] === 'foo')
		//	{
		//	This will round the api ping of the client
		const apiPing = Math.round(message.client.ping);
		//	This will round the response time between when the message was received and when the message was sent

		//	You can display as
		message.channel.send(`**API Ping:** \`${apiPing}\``);
		//	}
	},
};