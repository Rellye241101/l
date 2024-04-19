export interface ConfigItem {
    id: number;
    name: string;
    data: {
      detail: string;
      description: string;
      feedbacks: {
        name: string;
        userimage: string;
        comments: string;
      }[];
    };
  }
  