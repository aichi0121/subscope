import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subscope｜訂閱瞭望台",
  description: "管理 AI、串流影音、試用與續訂決策的個人訂閱工作台。",
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-Hant"><head><meta name="theme-color" content="#1f2b26"/><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/></head><body>{children}</body></html> }
