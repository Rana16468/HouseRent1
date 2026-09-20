import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";
import { PreferencesProvider } from "@/lib/i18n/preferences";
import { CreatePostModal } from "@/components/CreatePostModal";
import appCss from "../styles.css?url";

const APP_NAME = "Thikana";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Find a room, flat, mess, or office across Bangladesh. Filter by thana, tenant type, and monthly total.",
      },
      { name: "theme-color", content: "#1e3d32" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <PreviewHostBridge />
        <PreferencesProvider>
          <AuthProvider>
            <ReduxProvider>
              <Outlet />
              <CreatePostModal />
            </ReduxProvider>
          </AuthProvider>
        </PreferencesProvider>
        <Scripts />
      </body>
    </html>
  ),
});
