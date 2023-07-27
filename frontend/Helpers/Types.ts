export interface ScreenBreakPoints {
  isPhone: boolean;
  isIpad: boolean;
  isNextHub: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isCustomBreakPoint: boolean;
}

export interface mediaQueryProps {
  issm: boolean;
  ismd: boolean;
}
export interface DrawerContainerProps {
  isOpen: boolean;
}
export interface ImageProps {
  imageUrl: string;
}

export interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

export interface BackgroundColorProps {
  dominantColor: any;
}

export interface AuthorData {
  name: string;
  image: string;
  bio?: {
    children: {
      text: string;
    }[];
  }[];
}

//Blog post data from sanity
export interface PostData {
  _id: string;
  title: string;
  body: string;
  author: AuthorData;
  categories: string[];
  mainImage: string;
  publishedAt: string;
  slug: string;
  relatedArticlesData: any;
}
