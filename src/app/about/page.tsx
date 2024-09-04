import * as RouterUser from "@/components/002_RouteUsers";
import React from "react";

const page = () => {
	return (
		<div>
			About
			<RouterUser.RouteUserCard />
			<RouterUser.RouteUserImage />
			<RouterUser.RouteUserList />
		</div>
	);
};

export default page;
