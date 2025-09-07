"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { authClient } from '@workspace/auth/client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  );
}
