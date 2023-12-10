import { unauthenticatedLayoutConfig } from "../config/layoutConfig";
import { UnauthLayoutConfig, UnauthLayoutName } from "../interfaces";

/**
 * The component for authenticated layouts.
 */

interface UnauthenticatedLayoutProps {
  layoutName: UnauthLayoutName;
  children: React.ReactNode;
}

const UnauthenticatedLayout: React.FC<UnauthenticatedLayoutProps> = ({layoutName, children }) => {
  // get layout config from layout name (default if not found)
  const layoutConfig: UnauthLayoutConfig = unauthenticatedLayoutConfig[layoutName] || unauthenticatedLayoutConfig.default;

  let content;
  switch (layoutName) {
    case 'split':
      // For the "split" layout, separate the layout into left and right columns
      content = (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/** Left column content, e.g., Additional information or other forms*/}
            </div>
            <div className="col-md-6">
              {children}
            </div>
          </div>
        </div>
      );
      break;
    case 'card':
      // For the "card" layout, display the content in a card
      content = (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-body">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      // For other layouts, display the content as is
      content = children;
  }

  return (
    <div className={`unauthenticated-layout layout-name-${layoutConfig.layoutName} layout-type-${layoutConfig.layoutType}`}>
      {content}
    </div>
  );
};

export default UnauthenticatedLayout;
