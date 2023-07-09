import ProjectButtons from "@/components/ProjectButtons";
import { GetProject } from "@/utils/projects";
import Link from "next/link";

export default async function Page({ params }: { params: { id: number } }) {
	const project = await GetProject(params.id);

	return (
		<>
			<Link className="absolute top-0 left-0 m-3 underline" href="/">
				back
			</Link>

			{project == undefined ? (
				<div>
					<div className="absolute top-0 inset-0 container h-screen flex items-center justify-center text-center">
						<h1>404 Not Found - Project does not exist</h1>
					</div>
				</div>
			) : (
				<div className="container">
					<div className="outline outline-slate-950 outline-[0.5px]"></div>
					<div className="p-2">
						<h1 className="font-bold text-3xl">{project.name}</h1>
						<br></br>
						<p>{project.description}</p>
					</div>
					<ProjectButtons
						github={project.github}
						demo={project.demo}
					></ProjectButtons>
				</div>
			)}
		</>
	);
}
