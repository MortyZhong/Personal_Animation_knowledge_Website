import { Brain, Cloud, Code2, Cpu, Database, Network, Box, FileCode2, Globe2, Server, Zap, BookOpen } from 'lucide-react';
const icons = { brain: Brain, cloud: Cloud, code: Code2, cpu: Cpu, database: Database, network: Network, box: Box, file: FileCode2, globe: Globe2, server: Server, zap: Zap, book: BookOpen };
export function Icon({ name = 'book', size = 22 }: { name?: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] ?? BookOpen;
  return <Component size={size} strokeWidth={1.7} aria-hidden="true" />;
}
