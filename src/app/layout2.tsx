import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			// ヘッダーと左サイドバーメニューを作成
			<html lang="ja">
				<body>
					{/* ヘッダーのナビバー */}
					{/* 横に並べる */}
					<header className="flex justify-center">
						<Link className="flex-grow" href="/">
							Home
						</Link>
						<Link className="flex-grow" href="/route-users">
							RouteUsers
						</Link>
						<Link className="flex-grow" href="/about">
							About
						</Link>
						<Link className="flex-grow" href="/users">
							Users
						</Link>
					</header>
					{/* アプリの左メニュー */}
					<nav className="flex flex-col">
						{/* Home */}
						<Link href="/">Home</Link>
						{/* RouteUsersリンク */}
						<Link href="/route-users">RouteUsers</Link>
						<Link href="/about">About</Link>
						<Link href="/users">Users</Link>
					</nav>
					{children}
				</body>
			</html>
		);
}
