import { useRef, type PointerEvent } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { KnowledgeNode } from "../types/knowledge";

interface Props {
  questions: KnowledgeNode[];
  expanded: string[];
  selected: string;
  learned: string[];
  onSelect: (id: string) => void;
}

export function BehaviorBoard({ questions, expanded, selected, learned, onSelect }: Props) {
  const board = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; scrollLeft: number; moved: boolean } | null>(null);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || event.target !== board.current) return;
    const element = board.current;
    if (!element) return;
    drag.current = { x: event.clientX, scrollLeft: element.scrollLeft, moved: false };
    element.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current || !board.current) return;
    const distance = event.clientX - drag.current.x;
    if (Math.abs(distance) > 3) drag.current.moved = true;
    board.current.scrollLeft = drag.current.scrollLeft - distance;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    drag.current = null;
    if (board.current?.hasPointerCapture(event.pointerId)) {
      board.current.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div
      ref={board}
      className="tree-canvas behavior-board"
      aria-label="Behavior Questions board; drag empty space to scroll horizontally"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="behavior-board-track">
        {questions.map((question, index) => {
          const open = expanded.includes(question.id);
          return (
            <section className="behavior-column" key={question.id}>
              <button
                type="button"
                className={`behavior-question tree-node ${selected === question.id ? "selected" : ""}`}
                onClick={() => onSelect(question.id)}
                aria-expanded={open}
                aria-controls={`${question.id}-answers`}
              >
                <span className="behavior-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="behavior-question-text">{question.title}</span>
                <ChevronDown size={16} className={open ? "behavior-chevron open" : "behavior-chevron"} />
              </button>
              {open && (
                <div className="behavior-answers" id={`${question.id}-answers`}>
                  {question.children?.map((answer) => (
                    <button
                      type="button"
                      key={answer.id}
                      className={`behavior-answer ${selected === answer.id ? "selected" : ""}`}
                      onClick={() => onSelect(answer.id)}
                    >
                      <span className="behavior-answer-label">
                        {answer.title}
                        {learned.includes(answer.id) && <Check size={13} aria-label="Learned" />}
                      </span>
                      <span className="behavior-answer-text">{answer.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
      <div className="behavior-board-hint">Drag empty space to move across questions · scroll or swipe to explore</div>
    </div>
  );
}
