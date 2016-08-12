export interface Book {
  author: string;
  isbn: string;
  title: string;
  subtitle: string;
  numPages: number;
  publisher: {
    name: string;
    url: string
  }
}
