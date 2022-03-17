export type Requirement = {
  [Key in RequirementFields]: string;
};

export type RequirementAdd = Requirement & { id: number }

export type RequirementFields =
  | "description"
  | "difficulty"
  | "importance"
  | "estimated_time";
