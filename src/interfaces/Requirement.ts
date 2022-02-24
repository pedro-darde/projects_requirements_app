export type Requirement = {
  [Key in RequirementFields]: string;
};

export type RequirementFields =
  | "description"
  | "difficulty"
  | "importance"
  | "estimated_time";
