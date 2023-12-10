// LayoutChooser.tsx
import React from "react";
import { Route } from "react-router-dom";
import AuthenticatedLayout from "./AuthenticatedLayout";
import UnauthenticatedLayout from "./UnauthenticatedLayout";
import {
  AuthLayoutConfig,
  AuthLayoutName,
  UnauthLayoutConfig,
  UnauthLayoutName,
} from "../interfaces";

interface LayoutChooserProps {
  path: string;
  element: React.ReactNode; // Adjust the type based on the actual type expected by React Router v6
  isAuthenticated: boolean;
  layoutConfig: UnauthLayoutConfig | AuthLayoutConfig;
}

const LayoutChooser: React.FC<LayoutChooserProps> = ({
  path,
  element,
  isAuthenticated,
  layoutConfig,
}) => {
  const { layoutName } = layoutConfig;

  if (isAuthenticated) {
    return (
      <Route
        element={
          <AuthenticatedLayout layoutName={layoutName as AuthLayoutName}>
            {element}
          </AuthenticatedLayout>
        }
      />
    );
  }

  return (
    <Route
      element={
        <UnauthenticatedLayout layoutName={layoutName as UnauthLayoutName}>
          {element}
        </UnauthenticatedLayout>
      }
    />
  );
};

export default LayoutChooser;
