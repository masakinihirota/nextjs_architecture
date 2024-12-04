import Link from "next/link";

export default function Home() {
  return (
			<main className="flex min-h-screen flex-col items-center p-24">
				{/* 001-topへのリンク */}
				<Link href="/001-top">001-top</Link>
				{/* 002-route-accountへのリンク */}
				<Link href="/002-route-account">002-route-account</Link>
				{/* 003-user-profileへのリンク */}
				<Link href="/003-user-profile">003-user-profile</Link>
			</main>
		);
}
