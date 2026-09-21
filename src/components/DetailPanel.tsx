import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Check, ChevronDown, Sparkles, X } from 'lucide-react';
import type { KnowledgeNode } from '../types/knowledge';
import type { ThemeConfig } from '../config/themes';
import { Icon } from './Icon';
import { Artwork } from './Artwork';
interface Props { node: KnowledgeNode; theme: ThemeConfig; learned: boolean; onToggle: () => void; onClose: () => void }
export function DetailPanel({ node, theme, learned, onToggle, onClose }: Props) {
  return <motion.aside className="detail-panel" key={node.id} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }} aria-label="Topic details">
    <div className="panel-heading"><span><BookOpen size={15} /> FIELD NOTES</span><button className="icon-button" onClick={onClose} aria-label="Close topic details"><X size={17} /></button></div>
    <div className="detail-banner"><div className="detail-icon"><Icon name={node.icon} size={28} /></div><Artwork src={theme.character} /><span className="banner-star">✧</span></div>
    <div className="detail-content">
      <span className="eyebrow accent">{node.children ? 'EXPLORE THE FOUNDATIONS' : 'ONE MORE CONNECTION'}</span>
      <h2>{node.title}</h2><p className="description">{node.description}</p>
      {node.keyPoints && <section className="key-points"><h3><Sparkles size={15} /> Key takeaways</h3><ul>{node.keyPoints.map(point => <li key={point}>{point}</li>)}</ul></section>}
      {node.questions && <section className="questions"><h3>Ask a little deeper</h3>{node.questions.map((q, index) => <details key={q.question} open={index === 0}><summary>{q.question}<ChevronDown size={16} /></summary><p>{q.answer}</p></details>)}</section>}
      {node.example && <section className="example"><h3>A small example</h3><pre><code>{node.example}</code></pre></section>}
      {!node.keyPoints && <div className="note-callout"><Sparkles size={17} /><p>A starting point for your notes.<br />Keep exploring, one connection at a time.</p></div>}
      <button className={`learn-button ${learned ? 'is-learned' : ''}`} onClick={onToggle}><Check size={17} />{learned ? 'Learned · click to undo' : 'Mark as learned'}</button>
      {theme.source && <a className="art-credit" href={theme.source} target="_blank" rel="noreferrer">{theme.name} · artwork source <ArrowUpRight size={12} /></a>}
    </div>
  </motion.aside>;
}
