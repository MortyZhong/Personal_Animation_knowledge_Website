import type { KnowledgeNode } from "../types/knowledge";
export function findPath(nodes: KnowledgeNode[], id: string): KnowledgeNode[] {
  for (const node of nodes) {
    if (node.id === id) return [node];
    const childPath = findPath(node.children ?? [], id);
    if (childPath.length) return [node, ...childPath];
  }
  return [];
}
export function flatten(nodes: KnowledgeNode[]): KnowledgeNode[] {
  return nodes.flatMap((node) => [node, ...flatten(node.children ?? [])]);
}
