import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface Comment {
  id?: string;
  username: string;
  text: string;
  momentId: number;
  created_at?: string;
  updated_at?: string;
}
