// ページ単位での必要コンポーネントをまとめて読み込む
import * as RouterUser from "@/components/002_RouteUsers";

const page = () => {
	return (
		<div className="flex items-center justify-between flex-wrap">
			<div>About</div>
			<RouterUser.RouteUserCard />
			<RouterUser.RouteUserImage />
			<RouterUser.RouteUserList />
		</div>
	);
};

export default page;
