export interface HeaderProps {
   drawerOpen: boolean;
   handleDrawerChange: (open: boolean) => void;
}

export interface ContentProps {}

export interface LayoutProps {
   drawerOpen: boolean;
   handleDrawerChange: (open: boolean) => void;
}

export type MenuItem = {
   name: string;
   path: string;
   label: string;
};

export interface MenuListProps {
   items: readonly MenuItem[];
   handleClick?: (path: string) => void;
   textClassName?: string;
   divider?: boolean;
}

export type SocialPlatform = "instagram" | "facebook" | "linkedin" | "youtube" | "twitter";

export interface FooterProps {}
