// ページ単位での必要コンポーネントをまとめて読み込む
import * as Top from "@/menu/001_Top";

const page = () => {
	return (
		<div className="flex items-center justify-between flex-wrap">
			ここはTop pageです。
			<Top.TopCard />
			<Top.TopImage />
			<Top.TopList />
		</div>
	);
};

export default page;
