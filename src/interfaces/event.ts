export interface ChurchEventProps {
      id: string;
      title: string;
      description?: string | null
      location: string;
      eventDate: Date;
      createdBy: string;
      createdAt: Date;
}
