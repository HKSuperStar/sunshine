import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "客户与增长 Agent | Sun-Shine.ai",
  description: "从 AI 搜索曝光到真实 GMV，Sun-Shine.ai 把客户、内容、渠道和成交连接成一套可执行的增长系统。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
