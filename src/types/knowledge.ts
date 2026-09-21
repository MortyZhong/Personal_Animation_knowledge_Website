export interface Question { question: string; answer: string }
export interface KnowledgeNode {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  keyPoints?: string[];
  questions?: Question[];
  example?: string;
  children?: KnowledgeNode[];
}
