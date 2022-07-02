const CHANNEL_VOD = (user_id: string) => {
  return `https://api.twitch.tv/helix/videos?user_id=${user_id}`;
};

export default {
  CHANNEL_VOD,
};
