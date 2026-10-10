import { useRef, type PointerEvent } from "react";
import type { KnowledgeNode } from "../types/knowledge";

interface Props {
  questions: KnowledgeNode[];
  selected: string;
  onSelect: (id: string) => void;
}

export function BehaviorBoard({ questions, selected, onSelect }: Props) {
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
        {questions.map((question, index) => (
          <button
            type="button"
            key={question.id}
            className={`behavior-question tree-node ${selected === question.id ? "selected" : ""}`}
            onClick={() => onSelect(question.id)}
            aria-pressed={selected === question.id}
          >
            <span className="behavior-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="behavior-question-text">{question.title}</span>
          </button>
        ))}
      </div>
      <div className="behavior-board-hint">Drag empty space to move across questions · scroll or swipe to explore</div>
    </div>
  );
}
