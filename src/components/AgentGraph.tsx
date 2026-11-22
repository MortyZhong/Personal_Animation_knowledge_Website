import { useEffect, useRef } from "react";
import { ArrowUpRight, GitBranch, Layers3 } from "lucide-react";
import type { KnowledgeNode } from "../types/knowledge";

const graphUrl = `${import.meta.env.BASE_URL}ai-agents/graph.html`;
const sourceUrl =
  "https://chatgpt.com/share/6af660b7-9198-83ec-aa54-c5b9188b0571";

export function AgentGraph({
  chapters,
  selected,
  onSelect,
}: {
  chapters: KnowledgeNode[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  function showGraphView(id: string) {
    const chapter = id.match(/^agents-chapter-([0-5])$/)?.[1];
    frameRef.current?.contentWindow?.postMessage(
      { type: "ai-graph-view", chapterId: chapter ? Number(chapter) : null },
      window.location.origin,
    );
  }

  useEffect(() => {
    showGraphView(selected);
  }, [selected]);

  return (
    <div className="agent-learning">
      <div className="agent-intro">
        <span className="agent-intro-icon" aria-hidden="true">
          <GitBranch size={23} />
        </span>
        <div>
          <span className="eyebrow">A QUESTION-LED LEARNING MAP</span>
          <h3>Trace an idea from question to connection.</h3>
          <p>
            Explore 53 answered questions from my AI agent learning conversation.
            Start with the key ideas, choose a chapter, then select a question
            to see its direct concept links.
          </p>
        </div>
        <div className="agent-count" aria-label="53 learning rounds">
          <strong>53</strong>
          <span>learning rounds</span>
        </div>
      </div>

      <div className="agent-comparison" aria-label="Direct API and MCP comparison">
        <article>
          <span className="agent-comparison-label">DIRECT API PATH</span>
          <h4>Docs → adapter → agent</h4>
          <p>
            The agent or developer learns each service interface and connects it
            with suitable code or an SDK.
          </p>
        </article>
        <div className="agent-comparison-bridge" aria-hidden="true">
          <Layers3 size={20} />
        </div>
        <article>
          <span className="agent-comparison-label">MCP PATH</span>
          <h4>Server → shared tools → agent</h4>
          <p>
            A reusable tool contract can save repeated integration work. A
            focused tool list can also help a model with limited context.
          </p>
        </article>
      </div>

      <div className="agent-chapters">
        <div className="agent-chapters-heading">
          <span className="eyebrow">EXPLORE BY CHAPTER</span>
          <span>Choose a chapter to reveal its concepts and questions</span>
        </div>
        <div className="agent-chapter-list">
          {chapters.map((chapter, index) => (
            <button
              type="button"
              key={chapter.id}
              className={`agent-chapter ${selected === chapter.id ? "active" : ""}`}
              aria-pressed={selected === chapter.id}
              onClick={() => {
                onSelect(chapter.id);
                showGraphView(chapter.id);
              }}
              title={chapter.description}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {chapter.title}
            </button>
          ))}
        </div>
      </div>

      <div className="agent-graph-heading">
        <div>
          <span className="eyebrow">INTERACTIVE KNOWLEDGE GRAPH</span>
          <p>Choose a chapter, then select a question in the graph sidebar.</p>
        </div>
        <a href={graphUrl} target="_blank" rel="noopener noreferrer">
          Open full graph <ArrowUpRight size={15} />
        </a>
      </div>
      <iframe
        ref={frameRef}
        className="agent-graph-frame"
        src={graphUrl}
        title="Interactive AI Agents knowledge graph"
        onLoad={() => showGraphView(selected)}
      />
      <p className="agent-source">
        Built from my reviewed learning conversation.{" "}
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          Read the source conversation <ArrowUpRight size={13} />
        </a>
      </p>
    </div>
  );
}
