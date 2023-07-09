import ProjectInfo from "@/types/ProjectInfo";
import path from "path";
import { promises as fs } from "fs";

export async function GetProjects(): Promise<ProjectInfo[]> {
	const jsonDirectory = path.join(process.cwd(), "src/json");

	const projects: ProjectInfo[] = JSON.parse(
		await fs.readFile(jsonDirectory + "/projects.json", "utf8")
	);

	return projects;
}

export async function GetProject(id: number): Promise<ProjectInfo | undefined> {
	const projects = await GetProjects();

	return projects.find((x) => x.id == id);
}
