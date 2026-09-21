import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import type { KnowledgeNode } from "../types/knowledge";
import { themes } from "../config/themes";
import { flatten } from "../utils/knowledge";
import { Icon } from "./Icon";
export function TopicCard({
  node,
  index,
  learned,
  onSelect,
}: {
  node: KnowledgeNode;
  index: number;
  learned: string[];
  onSelect: (id: string) => void;
}) {
  const theme = themes[node.id];
  const topics = flatten(node.children ?? []);
  const count = topics.filter((topic) => learned.includes(topic.id)).length;
  return (
    <motion.button
      className="topic-card"
      style={
        {
          "--card-accent": theme.accent,
          "--card-wash": theme.wash,
        } as CSSProperties
      }
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.25 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onSelect(node.id)}
    >
      <div className={`card-visual visual-${node.id}`}>
        <span className="card-number">0{index + 1} / EXPLORE</span>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <span className="card-main-icon">
          <Icon name={node.icon} size={40} />
        </span>
        <span className="visual-spark">✦</span>
        <span className="visual-symbol">
          {node.id === "haskell" ? "λ" : node.id === "ml" ? "✧" : "+"}
        </span>
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{node.title}</h3>
          <ArrowUpRight size={18} />
        </div>
        <p>{node.subtitle}</p>
        <div className="card-meta">
          <span>
            <GitBranch size={13} /> {topics.length} topics
          </span>
          <span>
            {count ? `${count} learned` : "Ready to explore"}
            <i className={count ? "started" : ""} />
          </span>
        </div>
        <div className="progress-track">
          <span
            style={{
              width: `${topics.length ? (count / topics.length) * 100 : 0}%`,
            }}
          />
        </div>
      </div>
    </motion.button>
  );
}
