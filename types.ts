export interface Topic {
  id: string;
  title: string;
  content: string; // Markdown-like explanation
  codeSnippet?: string; // C++ code example
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface CourseData {
  chapters: Chapter[];
}