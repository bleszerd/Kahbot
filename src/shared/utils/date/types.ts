export interface IGetDayDifferencePayload {
  date1: Date;
  date2: Date;
}

interface IVod {
  id: string;
  stream_id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: string;
  view_count: number;
  language: string;
  type: string;
  duration: string;
  muted_segments: any[] | null;
}

export interface IChannelVodsApiResponse {
  data: IVod[];
}
