export type Requirement = {
  [Key in RequirementFields]: string;
};

export type RequirementAdd = Requirement & { id: number, pictures: RequirementPictures[] }

export type RequirementFields =
  | "description"
  | "difficulty"
  | "importance"
  | "estimated_time"
  | "location";;

export type RequirementPictures = {
  id: number,
  path: string,
  fileName: string
}
