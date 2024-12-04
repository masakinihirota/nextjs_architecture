import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ヘッダーにはシステム的なメニューを作ります。
// 左サイドバーにはアプリケーションの目的別メニューを作ります。
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		// ヘッダーと左サイドバーメニューを作成
		<html lang="ja">
			<body>
				{/* ヘッダーメニュー */}
				{/* ヘッダーリンクを作る home price 広告のメニューをそれぞれリンクを作る*/}
				<header className="flex justify-between flex-wrap items-center">
					<Link href="/">Home</Link>
					<Link href="/price">Price</Link>
					<Link href="/ad">広告</Link>
				</header>
				{/* 左サイドバーメニュー */}
				<nav className="flex flex-col">
					{/* 左サイドバーのメニューは */}
					{/* ルートアカウント */}
					{/* ユーザープロフィール */}
					{/* 作品登録 */}
					{/* グループ */}
					{/* お知らせ */}
					{/* お問い合わせ */}
					<Link href="/001-top">001-Top</Link>
					<Link href="/002-route-account">002-RouteAccount</Link>
					<Link href="/003-user-profile">003-UserProfile</Link>
				</nav>
				{children}
			</body>
		</html>
	);
}
