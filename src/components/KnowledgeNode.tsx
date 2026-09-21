import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import type { KnowledgeNode as Node } from "../types/knowledge";
import { Icon } from "./Icon";
interface Props {
  node: Node;
  selected: string;
  expanded: string[];
  learned: string[];
  onSelect: (id: string) => void;
}
export function KnowledgeNode({
  node,
  selected,
  expanded,
  learned,
  onSelect,
}: Props) {
  const open = expanded.includes(node.id);
  return (
    <li className="tree-branch">
      <motion.button
        className={`tree-node ${selected === node.id ? "selected" : ""}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect(node.id)}
        aria-pressed={selected === node.id}
        aria-expanded={node.children ? open : undefined}
      >
        <span className="node-icon">
          <Icon name={node.icon} size={19} />
        </span>
        <span>
          {node.title}
          {node.children && <small>{node.children.length} connections</small>}
        </span>
        {learned.includes(node.id) ? (
          <Check className="node-check" size={15} />
        ) : node.children ? (
          <ChevronRight size={15} className={open ? "rotated" : ""} />
        ) : null}
      </motion.button>
      <AnimatePresence initial={false}>
        {open && node.children && (
          <motion.ul
            className="tree-children"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
          >
            {node.children.map((child) => (
              <KnowledgeNode
                key={child.id}
                node={child}
                selected={selected}
                expanded={expanded}
                learned={learned}
                onSelect={onSelect}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
