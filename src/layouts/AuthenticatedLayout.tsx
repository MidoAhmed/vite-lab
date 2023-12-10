// Note: Unauthenticated Layout Component is not used in the starter project.
import React from 'react';
import { AuthLayoutConfig, AuthLayoutName } from '../interfaces';
import { authenticatedLayoutConfig } from '../config/layoutConfig';

interface AuthenticatedLayoutProps {
    layoutName: AuthLayoutName;
    children: React.ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({layoutName, children}) => {
    // get layout config from layout name (default if not found)
    const layoutConfig:AuthLayoutConfig = authenticatedLayoutConfig[layoutName] || authenticatedLayoutConfig.default;

    return (
        <div className={`authenticated-layout layout-name-${layoutConfig.layoutName} layout-type-${layoutConfig.layoutType}`}>
            {layoutConfig.showHeader && <div /** Header  */  />}
            {layoutConfig.showSidebar && <div /** Sidebar */  />}
            {children}
            {layoutConfig.showFooter && <div /** Footer */  />}
        </div>
    );
}
 
export default AuthenticatedLayout;