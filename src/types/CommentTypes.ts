export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  username: string;
  replyingTo: string;
  parentComment: string;
}
