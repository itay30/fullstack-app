export interface Item {
  _id: string;
  title: string;
  description: string;
  img: string;
}

export interface ItemQuery {
  searchTerm?: string;
} 