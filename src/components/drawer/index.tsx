export default function Drawer({
	drawerOpen,
}: {
	drawerOpen: boolean;
}) {
	return (
		<div
			className={`${
				drawerOpen ? 'visible' : 'hidden'
			} w-[30%] bg-stone-800`}></div>
	);
}
