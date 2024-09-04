// ページ単位での必要コンポーネントをまとめて読み込む
import * as RouteAccount from "@/components/002_RouteAccount";

const page = () => {
	return (
		<div className="flex items-center justify-between flex-wrap">
			ここはルートアカウントのページです。
			<RouteAccount.RouteAccountCard />
			<RouteAccount.RouteAccountImage />
			<RouteAccount.RouteAccountList />
		</div>
	);
};

export default page;
