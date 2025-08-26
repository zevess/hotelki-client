import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { Container } from "./shared/ui/container";
import { QueryProvider } from "./shared/providers/queryProvider";
import { Header } from "./widgets/header";
import { Toaster } from "./shared/ui/shadcn/sonner";


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col">
        <QueryProvider>
          <Toaster position='top-center' richColors />
          {children}
        </QueryProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}



export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (


    <Container >

      <Header />
      <div className='flex flex-col'>
        <section className='flex flex-wrap justify-center gap-6 mb-10 animate-[fadeIn_1.5s_ease-in-out_1]'>

          <div className='w-[588px] flex flex-col flex-wrap gap-6'>
            <span className='font-bold text-5xl sm:text-7xl'>СТРАНИЦА <br /> НЕ НАЙДЕНА</span>
          </div>

          <div className='max-w-[588px]'>
            <img src="/not-found.jpg" className='rounded-[20px] h-full' alt="" />
          </div>
        </section>
      </div>

    </Container >
  );
}
