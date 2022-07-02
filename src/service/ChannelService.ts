import { AxiosInstance } from "axios";
import endpointBuilder from "../shared/connection/endpointBuilder";
import { getDateDifference } from "../utils/date/date";
import { IChannelVodsApiResponse } from "../utils/date/types";

class ChannelBoardService {
  constructor(private axiosClient: AxiosInstance) {}

  async getChannelDowntime() {
    const broadcasts = await this.getChannelVods();

    if (!broadcasts || broadcasts?.length === 0) {
      console.log("NO BROADCAST DATA");
      return null;
    }

    const lastBroadcastDateStr = broadcasts[0].created_at;
    const channelName = broadcasts[0].user_name;

    const daysOffline =
      getDateDifference({
        date1: new Date(),
        date2: new Date(lastBroadcastDateStr),
      }) * -1;

    return {
      channelName,
      daysOffline,
    };
  }

  async getChannelVods(userId?: string) {
    const twitchUserId = userId || `${process.env.TWITCH_USER_ID}`;

    try {
      const response = await this.axiosClient.get<IChannelVodsApiResponse>(
        endpointBuilder.CHANNEL_VOD(twitchUserId)
      );

      return response.data.data;
    } catch (e) {
      console.log(e);

      return [];
    }
  }
}

export default ChannelBoardService;
