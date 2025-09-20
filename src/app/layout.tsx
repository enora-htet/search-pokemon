import "./globals.css";
import { ReactNode } from "react";
import ApolloClientProvider from "@/components/ApolloClientProvider";

export const metadata = { title: "Search Pokémon", description: "Next.js + Apollo Pokémon search" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <ApolloClientProvider>
          <main className="mx-auto max-w-3xl p-6">{children}</main>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
