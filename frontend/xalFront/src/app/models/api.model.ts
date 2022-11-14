import { Timestamp } from "rxjs";

export interface owner {
  display_name: string;
  link: string;
  profile_image: string;
  reputation:number;
  user_id: number;
  user_type:string;
}
export interface dataApi{
  answered?: number;
  notanswered?: number;
  data?: any[];
  owner?: owner;
  accepted_answer_id: number;
  answer_count: number;
  content_license: string;
  creation_date: bigint;
  is_answered: boolean;
  last_activity_date: bigint;
  last_edit_date:bigint;
  link: string;
  question_id:number;
  score: number;
  tags: string;
  title:string;
  view_count: number;
}

export  interface ApiResponse {
  data?: (dataApi|any);
  owner?: owner;
  status?: string;
  Message?: string;
}
