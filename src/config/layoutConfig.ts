// Note: Configuration for layout types, positions, and other layout-related settings.

import { AuthLayoutConfig, AuthLayoutName, UnauthLayoutConfig, UnauthLayoutName } from "../interfaces";

export const authenticatedLayoutConfig: Record<AuthLayoutName , AuthLayoutConfig> = {
  default: {
    layoutName: "default",
    layoutType: "fluid",
    showHeader: true,
    showSidebar: true,
    showFooter: true,
    header: {
      height: "60px",
      backgroundColor: "#3498db",
      textColor: "#ffffff",
      // Additional header configuration options
    },
    sidebar: {
      type: "vertical",
      position: "left",
      width: "250px",
      backgroundColor: "#2c3e50",
      textColor: "#ffffff",
      collapsedWidth: "80px",
      collapseOnMobile: true,
      // Additional sidebar configuration options
    },
    footer: {
      height: "40px",
      backgroundColor: "#34495e",
      textColor: "#ffffff",
      // Additional footer configuration options
    },
    // Additional configuration options specific to the default layout
  },
  classic: {
    layoutName: "classic",
    layoutType: "fixed",
    showHeader: true,
    showSidebar: true,
    showFooter: true,
    header: {
      height: "80px",
      backgroundColor: "#333",
      textColor: "#ffffff"
      // Additional header configuration options
    },
    sidebar: {
      type: "vertical",
      position: "left",
      width: "250px",
      backgroundColor: "#444",
      textColor: "#ffffff",
      collapsedWidth: "80px",
      collapseOnMobile: true
      // Additional sidebar configuration options
    },
    footer: {
      height: "50px",
      backgroundColor: "#555",
      textColor: "#ffffff"
      // Additional footer configuration options
    },
    // Additional configuration options specific to the classic layout
  },
  simple: {
    layoutName: "simple",
    layoutType: "fluid",
    showHeader: false,
    showSidebar: true,
    showFooter: false,
    header: {
      // No header in the simple layout
    },
    sidebar: {
      type: "vertical",
      position: "left",
      width: "200px",
      backgroundColor: "#2c3e50",
      textColor: "#ffffff",
      collapsedWidth: "80px",
      collapseOnMobile: false,
      // Additional sidebar configuration options
    },
    footer: {
      // No footer in the simple layout
    },
    // Additional configuration options specific to the simple layout
  },
  // Add configurations for other custom authenticated layouts here as needed (e.g. "minimal", "modern", etc.)
};


export const unauthenticatedLayoutConfig: Record<UnauthLayoutName , UnauthLayoutConfig> = {
    default: {
        layoutName: "default",
        layoutType: "fluid",
        contentWidth: "full",
        centered: true,
        formPosition: "center",
        formBackgroundColor: "#ffffff",
        card: false,
        split: false,    
        // Additional configuration options specific to the default layout
    },
    split: {
        layoutName: "split",
        layoutType: "fluid",
        contentWidth: "full",
        centered: false,
        formPosition: "start",
        formBackgroundColor: "#f0f0f0",
        card: false,
        split: true,
    
        // Additional configuration options specific to the split layout
    },
    card: {
        layoutName: "card",
        layoutType: "fluid",
        contentWidth: "full",
        centered: true,
        formPosition: "center",
        formBackgroundColor: "#ffffff",
        card: true,
        split: false,
        // Additional configuration options specific to the card layout
    },
    // Add configurations for other custom unauthenticated layouts here as needed
}