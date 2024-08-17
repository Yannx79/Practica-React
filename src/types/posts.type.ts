/*
export interface Post {
    userId?: number;
    id?:     number;
    title:  string;
    body:   string;
}
*/
export interface Post {
    id:          number;
    slug:        string;
    url:         string;
    title:       string;
    content:     string;
    image:       string;
    thumbnail:   string;
    status:      Status;
    category:    Category;
    publishedAt: string;
    updatedAt:   string;
    userId:      number;
    isAdded?:    boolean;
}

export enum Category {
    Elementum = "elementum",
    Ipsum = "ipsum",
    Jsonplaceholder = "jsonplaceholder",
    Lorem = "lorem",
    Rutrum = "rutrum",
}

export enum Status {
    Published = "published",
}
