export default function Project({
	name,
	icon,
}: {
	name: string;
	icon: string | undefined;
}) {
	return (
		<div className="h-64 w-full  bg-slate-700 p-2 transition ease-in-out hover:bg-slate-600 hover:drop-shadow-lg hover:cursor-pointer focus:outline-none">
			<div className="items-center justify-center text-center h-full flex gap-5">
				<span className="select-none text-5xl max-md:text-3xl font-bold text-slate-300 drop-shadow-lg ">
					{name}
				</span>
				{icon ? (
					<img
						className="select-none"
						alt=""
						src={icon}
						width={64}
						height={64}
					></img>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
