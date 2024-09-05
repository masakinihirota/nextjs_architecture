// ページ単位での必要コンポーネントをまとめて読み込む
import * as UserProfile from "@/menu/003_UserProfile";

const page = () => {
	return (
		<div className="flex items-center justify-between flex-wrap">
			ここはユーザープロフィールのページです。
			<UserProfile.UserProfileCard />
			<UserProfile.UserProfileImage />
			<UserProfile.UserProfileList />
		</div>
	);
};

export default page;
