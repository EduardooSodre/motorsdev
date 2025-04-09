export interface PostProps {
  objects: ObjectPost[];
}

interface ObjectPost {
  button: any;
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      title: string;
      text: string;
      banner: {
        url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
    };
  };
}

//https://api.cosmicjs.com/v3/buckets/motorsdev-production/objects/67ed617d9949d6b0f2b0a9b9?pretty=true&read_key=XnZOxNf6RWilgiaiNkuKu3tuxPdS0XZxG7XLkUCyp8WL1DKoX9&depth=1&props=slug,title,metadata,type
