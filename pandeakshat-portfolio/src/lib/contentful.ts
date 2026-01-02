// src/lib/contentful.ts
import { createClient, type EntryFieldTypes } from "contentful";

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

// TypeScript Interface matching your Content Model
export interface Project {
  contentTypeId: "project";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    repoUrl?: EntryFieldTypes.Text;
    demoUrl?: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    coverImage?: EntryFieldTypes.AssetLink; 
    content?: EntryFieldTypes.RichText;
  };
}


export interface BlogPost {
  contentTypeId: "blog";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    summary: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>; // List of text strings
    readTime: EntryFieldTypes.Text;
    mediumUrl?: EntryFieldTypes.Text;
    coverImage?: EntryFieldTypes.AssetLink;
    content?: EntryFieldTypes.RichText;
  };
}