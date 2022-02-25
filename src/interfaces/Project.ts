export type Project = {
  [Key in RequiredFieldsProject]: string;
};
export type RequiredFieldsProject = "name" | "start_date" | "release_date";
