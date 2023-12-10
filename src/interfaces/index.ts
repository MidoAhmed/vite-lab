//#############################################################################
//###### Interfaces/types for the Authenticated Layout configuration  #######
//#############################################################################

export type AuthLayoutName = "default" | "classic" | "simple"; // Add other custom layouts here as needed (e.g. "minimal", "modern", etc.)

export interface AuthLayoutConfig {
  layoutName: AuthLayoutName;
  layoutType: "fluid" | "fixed";
  showHeader: boolean;
  showSidebar: boolean;
  showFooter: boolean;
  header: Partial<HeaderConfig>;
  sidebar: Partial<SidebarConfig>;
  footer: Partial<FooterConfig>;
  // Additional configuration options specific to the layout
}

export interface HeaderConfig {
  height: string;
  backgroundColor: string;
  textColor: string;
  // Additional header configuration options
}

export interface SidebarConfig {
  type:
    | "horizontal"
    | "vertical"
    | "hidden"
    | "collapsed"
    | "offcanvas"
    | "floating"
    | "docked";
  position: "top" | "left" | "right";
  width: string;
  backgroundColor: string;
  textColor: string;
  collapsedWidth: string;
  collapseOnMobile: boolean;
  // Additional sidebar configuration options
}

export interface FooterConfig {
  height: string;
  backgroundColor: string;
  textColor: string;
  // Additional footer configuration options
}

//####################################################################################
//######### Interfaces/types for the Unauthenticated Layout configuration  #############
//####################################################################################

export type UnauthLayoutName = "default" | "split" | "card"; // Add other custom layouts here as needed

export interface UnauthLayoutConfig {
  layoutName: UnauthLayoutName;
  layoutType: "fluid" | "fixed";
  contentWidth: "full" | "boxed";
  centered: boolean;
  formPosition: "start" | "center" | "end";
  formBackgroundColor: string;
  card: boolean;
  split: boolean;
}
