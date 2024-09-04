import Link from "next/link";

export default function Home() {
  return (
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{/* route-usersリンク */}
				<Link href="/route-users" className="text-green-500">
					RouteUsersページへのリンク
				</Link>
			</main>
		);
}
