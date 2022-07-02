import "dotenv/config";
import tmi from "tmi.js";
import ChannelBoardService from "../service/ChannelService";
import { Emotes } from "../utils/emotes";
import axiosClient from "./connection/client";

//client=fjm3cu1ed4xsfbu1wl5cfkswy7np8r
//secret=yt2ux8fy2o8bsrq0ci9ad123fl9bz9

/*
{
	"access_token": "tw8r76tfsggfhut7s2v8bh3aynp05z",
	"expires_in": 5661274,
	"token_type": "bearer"
}
*/

/*
{
	"data": [
		{
			"id": "141981764",
			"login": "twitchdev",
			"display_name": "TwitchDev",
			"type": "",
			"broadcaster_type": "partner",
			"description": "Supporting third-party developers building Twitch integrations from chatbots to game integrations.",
			"profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-300x300.png",
			"offline_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/3f13ab61-ec78-4fe6-8481-8682cb3b0ac2-channel_offline_image-1920x1080.png",
			"view_count": 19044088,
			"created_at": "2016-12-14T20:32:28Z"
		}
	]
}
*/

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: `${process.env.TWITCH_USERNAME}`,
    password: `oauth:${process.env.TWITCH_OAUTH}`,
  },
  channels: [`${process.env.TWITCH_CHANNEL}`],
});

client.connect().catch(console.error);

client.on("message", (channel, tags, message, self) => {
  const channelService = new ChannelBoardService(axiosClient);

  if (self) return;

  if (message.trim().toLowerCase() === "!saudade") {
    channelService.getChannelDowntime().then((downtimeData) => {
      if (downtimeData) {
        const { channelName, daysOffline } = downtimeData;
        client.say(
          channel,
          `${channelName} já está offline há ${daysOffline} dias ${Emotes.SAD_RAIN}`
        );
      }
    });
  }
});
