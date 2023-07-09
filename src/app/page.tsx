import Project from "@/components/Project";
import { GetProjects } from "@/utils/projects";
import Link from "next/link";

const range = [0, 1, 2, 3, 4, 5];

export default async function Home() {
	const projects = await GetProjects();

	return (
		<div className="grid grid-cols-2">
			{range.map((x) =>
				projects[x] ? (
					<Link href={{ pathname: "/project/" + projects[x].id }}>
						<Project name={projects[x].name} icon="/favicon.ico"></Project>
					</Link>
				) : (
					<Project name="Coming soon..." icon={undefined}></Project>
				)
			)}
		</div>
	);
}
