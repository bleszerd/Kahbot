import tmi from "tmi.js";

import ChannelBoardService from "../../service/ChannelService";
import axiosClient from "./client";

import { Emotes } from "../../utils/emotes";

export const setupTwitchIrc = () => {
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
};
