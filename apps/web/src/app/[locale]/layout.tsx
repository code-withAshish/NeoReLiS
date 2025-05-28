import "./styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@lib/fontsawesome";

import { config } from "@fortawesome/fontawesome-svg-core";
import { Inter, K2D, Montserrat, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";

config.autoAddCss = false; // Prevent FontAwesome from adding its own CSS

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: "600",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-robot",
  subsets: ["greek"],
  weight: ["400"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log(locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`bg-[#f7f9fc] ${geistSans.variable} ${geistMono.variable} ${k2d.variable} ${inter.variable} ${poppins.variable} ${montserrat.variable} ${roboto.variable}`}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
