export interface Message {
  id: number;
  senderId: number;
  senderusername: string;
  senderPhotoUrl: string;
  recipientId: number;
  recipientusername: string;
  recipientPhotoUrl: string;
  content: string;
  dateRead?: Date;
  messageSent: Date;
}
