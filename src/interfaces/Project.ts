import { Requirement, RequirementAdd } from "./Requirement";

export type Project = {
  [Key in RequiredFieldsProject]: string
};
export type RequiredFieldsProject = "name" | "start_date" | "release_date" | "documentation_link";


export type ProjectRequirement = {
  project: Project, 
  requirement: RequirementAdd
}

export type ProjectAdded = Project & {
  id: number,
  projectRequirements: ProjectRequirement[]
}