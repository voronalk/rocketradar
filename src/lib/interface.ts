export interface Launch {
  id: string;
  cospar_id: string;
  sort_date: string;
  name: string;
  provider: {
    id: number;
    name: string;
    slug: string;
  };
  vehicle: {
    id: number;
    name: string;
    company_id: number;
    slug: string;
  };
  pad: {
    id: number;
    name: string;
    location: {
      id: number;
      name: string;
      state: number;
      statename: number;
      country: string;
      slug: string;
    };
  };
  missions: [
    {
      id: number;
      name: string;
      description: number;
    }
  ];
  mission_description: number;
  launch_description: string;
  win_open: string;
  t0: string;
  win_close: number;
  est_date: {
    month: number;
    day: number;
    year: number;
    quarter: number;
  };
  date_str: string;
  tags: [
    {
      id: number;
      text: string;
    }
  ];
  slug: string;
  weather_summary: string;
  weather_temp: number;
  weather_condition: string;
  weather_wind_mph: number;
  weather_icon: string;
  weather_updated: string;
  quicktext: string;
  media: any;
  result: number;
  suborbital: false;
  modified: string;
}

export interface RocketAPIResponse {
  valid_auth: boolean;
  count: number;
  limit: number;
  total: number;
  last_page: number;
  result: Launch[];
}
