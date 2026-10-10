import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Compass,
  GitBranch,
  GraduationCap,
  LayoutGrid,
  Map,
  Menu,
  Search,
  Sparkles,
  Sprout,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { knowledge } from "./data/knowledge";
import { themes } from "./config/themes";
import { findPath, flatten } from "./utils/knowledge";
import { Icon } from "./components/Icon";
import { TopicCard } from "./components/TopicCard";
import { KnowledgeNode } from "./components/KnowledgeNode";
import { DetailPanel } from "./components/DetailPanel";
import { BehaviorBoard } from "./components/BehaviorBoard";

const allNodes = flatten(knowledge);
const topicCount = allNodes.length - knowledge.length;
const storageKey = "my-learning-map-v1";
function loadProgress(): { learned: string[]; recent: string[] } {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    const valid = (value: unknown) =>
      Array.isArray(value)
        ? value.filter(
            (id): id is string =>
              typeof id === "string" && allNodes.some((node) => node.id === id),
          )
        : [];
    if (saved && typeof saved === "object")
      return {
        learned: valid((saved as Record<string, unknown>).learned),
        recent: valid((saved as Record<string, unknown>).recent).slice(0, 4),
      };
  } catch {
    /* Storage is optional in private or restricted browsers. */
  }
  return { learned: [], recent: [] };
}
export default function App() {
  const [selectedId, setSelectedId] = useState("");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [progress, setProgress] = useState(loadProgress);
  const [query, setQuery] = useState("");
  const [view, setView] = useState<"explore" | "progress">("explore");
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(true);
  const [storageUnavailable, setStorageUnavailable] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const path = useMemo(() => findPath(knowledge, selectedId), [selectedId]);
  const domain = path[0];
  const selected = path[path.length - 1];
  const theme = themes[domain?.id ?? "ml"];
  const learnedTopics = progress.learned.filter(
    (id) => !knowledge.some((node) => node.id === id),
  ).length;
  const results = useMemo(
    () =>
      query.trim()
        ? allNodes.filter((node) =>
            `${node.title} ${node.description}`
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
          )
        : [],
    [query],
  );
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      setStorageUnavailable(true);
    }
  }, [progress]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape") {
        setQuery("");
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  function navigate(id: string, toggle = false) {
    const newPath = findPath(knowledge, id);
    if (!newPath.length) return;
    const node = newPath[newPath.length - 1];
    setExpanded((previous) => {
      const next = new Set(previous);
      newPath.slice(0, -1).forEach((parent) => next.add(parent.id));
      if (node.children) {
        if (toggle && next.has(id)) next.delete(id);
        else next.add(id);
      }
      return [...next];
    });
    setSelectedId(id);
    setView("explore");
    setPanelOpen(true);
    setQuery("");
    setMenuOpen(false);
    setVideoMuted(true);
    setProgress((previous) => ({
      ...previous,
      recent: [id, ...previous.recent.filter((item) => item !== id)].slice(
        0,
        4,
      ),
    }));
  }
  function home(nextView: "explore" | "progress" = "explore") {
    setSelectedId("");
    setView(nextView);
    setMenuOpen(false);
    setQuery("");
    setVideoMuted(true);
  }
  async function toggleVideoSound() {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setVideoMuted(nextMuted);
    if (video.paused) {
      try {
        await video.play();
      } catch {
        video.muted = true;
        setVideoMuted(true);
      }
    }
  }
  function toggleLearned() {
    if (!selected) return;
    setProgress((previous) => ({
      ...previous,
      learned: previous.learned.includes(selected.id)
        ? previous.learned.filter((id) => id !== selected.id)
        : [...previous.learned, selected.id],
    }));
  }
  return (
    <div
      className={`app ${!domain && view === "explore" ? "overview-active" : ""}`}
      style={
        {
          "--accent": theme.accent,
          "--theme-wash": theme.wash,
        } as CSSProperties
      }
    >
      {menuOpen && (
        <button
          className="mobile-scrim"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <aside
        className={`sidebar ${menuOpen ? "mobile-open" : ""}`}
        aria-label="Workspace navigation"
      >
        <button className="brand" onClick={() => home()}>
          <span className="brand-icon">
            <Map size={22} />
          </span>
          <span>
            My Learning Map<small>A SPACE TO GROW</small>
          </span>
        </button>
        <div className="sidebar-label">YOUR WORKSPACE</div>
        <nav aria-label="Main navigation">
          <button
            className={
              !domain && view === "explore" ? "nav-item active" : "nav-item"
            }
            onClick={() => home()}
          >
            <Compass size={18} /> Overview
            <span className="nav-dot" />
          </button>
          <button
            className={view === "progress" ? "nav-item active" : "nav-item"}
            onClick={() => home("progress")}
          >
            <GraduationCap size={18} /> My progress
            <span className="nav-count">{learnedTopics}</span>
          </button>
        </nav>
        <div className="sidebar-label domains-label">
          LEARNING DOMAINS <span>{knowledge.length}</span>
        </div>
        <nav className="domain-nav" aria-label="Learning domains">
          {knowledge.map((node) => (
            <button
              className={`nav-item ${domain?.id === node.id ? "domain-active" : ""}`}
              onClick={() => navigate(node.id)}
              key={node.id}
            >
              <span style={{ color: themes[node.id].accent }}>
                <Icon name={node.icon} size={18} />
              </span>
              {node.title}
              <ChevronRight size={13} />
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="growth-card">
            <Sprout size={23} />
            <p>
              Small steps.
              <br />
              <strong>Endless possibilities.</strong>
            </p>
            <span>Your next discovery is one click away.</span>
          </div>
          <div className="profile">
            <span className="avatar">
              me
              <span />
            </span>
            <div>
              My little universe<small>Forever a student</small>
            </div>
            <Sparkles size={16} />
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <div className="topbar-location">
            <button
              className="icon-button mobile-menu"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={22} />
            </button>
            <span className="location-icon">
              <Compass size={17} />
            </span>
            <span>
              {domain
                ? domain.title
                : view === "progress"
                  ? "My progress"
                  : "My workspace"}
            </span>
            <ChevronRight size={14} />
            <span className="muted">
              {domain ? "Knowledge map" : "Overview"}
            </span>
          </div>
          <div className="search-wrap">
            <Search size={16} />
            <input
              ref={searchRef}
              type="search"
              aria-label="Search knowledge"
              placeholder="Find a little knowledge…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <kbd>⌘ K</kbd>
            {query.trim() && (
              <div
                className="search-results"
                role="region"
                aria-label="Search results"
              >
                <div className="search-caption">
                  {results.length} connections found
                </div>
                {results.length ? (
                  results.map((node) => (
                    <button key={node.id} onClick={() => navigate(node.id)}>
                      <Icon name={node.icon} size={16} />
                      <span>
                        {node.title}
                        <small>
                          {findPath(knowledge, node.id)
                            .map((item) => item.title)
                            .join(" / ")}
                        </small>
                      </span>
                      <ArrowUpRight size={15} />
                    </button>
                  ))
                ) : (
                  <p>No topics yet. Try “S3” or “parallel”.</p>
                )}
              </div>
            )}
          </div>
          <span className="topbar-spark" aria-hidden="true">
            ✧
          </span>
        </header>
        <main id="main-content">
          {!domain && view === "explore" ? (
            <section className="overview-cinema" aria-label="Overview video">
              <video
                ref={videoRef}
                autoPlay
                muted={videoMuted}
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src={`${import.meta.env.BASE_URL}assets/video/site-background.mp4`}
                  type="video/mp4"
                />
              </video>
              <div className="cinema-shade" />
              <div className="cinema-copy">
                <div className="hero-kicker">
                  <span /> A LITTLE FURTHER, EVERY DAY
                </div>
                <h1>
                  Explore what
                  <br />I have <em>learned.</em>
                </h1>
                <p>
                  A little universe of ideas, discoveries, and connections.
                  <br />Welcome to my computer science journey.
                </p>
                <div className="hero-bottom">
                  <span>
                    <GitBranch size={14} /> {topicCount} topics to discover
                  </span>
                  <span className="tiny-dot" />
                  <span>Always a work in progress</span>
                </div>
              </div>
              <button
                className="sound-toggle"
                type="button"
                onClick={toggleVideoSound}
                aria-label={videoMuted ? "Turn video sound on" : "Mute video"}
              >
                {videoMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                {videoMuted ? "Sound on" : "Mute"}
              </button>
              <a className="scroll-cue" href="#learning-content">
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown size={16} />
              </a>
            </section>
          ) : (
            <section className={`hero ${domain ? "domain-hero" : ""}`}>
              {domain && theme.background && (
                <img
                  className="domain-scene-background"
                  src={theme.background}
                  style={{ objectPosition: theme.backgroundPosition }}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <div className="hero-grid" />
              <span className="hero-orbit" />
              <span className="hero-star star-one">✦</span>
              <div className="hero-copy">
                <div className="hero-kicker">
                  <span />
                  {domain
                    ? `CHAPTER 0${knowledge.indexOf(domain) + 1} · ${theme.name.toUpperCase()}`
                    : "YOUR LEARNING JOURNEY"}
                </div>
                <h1>
                  {domain ? (
                    <>
                      {domain.title}
                      <span>{domain.subtitle}.</span>
                    </>
                  ) : (
                    <>See how far you have come.</>
                  )}
                </h1>
                <p>
                  {domain
                    ? domain.description
                    : "Every saved topic is another connection in your learning map."}
                </p>
                <div className="hero-bottom">
                  <span>
                    <GitBranch size={14} />
                    {domain
                      ? flatten(domain.children ?? []).length
                      : learnedTopics}{" "}
                    {domain ? "topics to discover" : "connections made"}
                  </span>
                  <span className="tiny-dot" />
                  <span>{domain ? theme.label : "Keep going"}</span>
                </div>
              </div>
              <span className="hero-side-text">LEARN · CONNECT · GROW</span>
            </section>
          )}
          <div className="workspace-grid" id="learning-content">
            <section
              className="map-area"
              aria-label={domain ? "Knowledge map" : "Learning domains"}
            >
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    {domain
                      ? "FOLLOW THE CONNECTIONS"
                      : view === "progress"
                        ? "LOOK HOW FAR YOU’VE COME"
                        : "CHOOSE YOUR NEXT ADVENTURE"}
                  </span>
                  <h2>
                    {domain
                      ? "Your knowledge map"
                      : view === "progress"
                        ? "My learning progress"
                        : "Learning domains"}
                    <span>
                      {domain
                        ? "LIVE MAP"
                        : String(knowledge.length).padStart(2, "0")}
                    </span>
                  </h2>
                </div>
                {domain ? (
                  <button className="text-button" onClick={() => home()}>
                    <ArrowLeft size={14} /> All domains
                  </button>
                ) : (
                  <span className="view-indicator">
                    <LayoutGrid size={15} /> Overview
                  </span>
                )}
              </div>
              {domain ? (
                <>
                  <nav className="breadcrumb" aria-label="Breadcrumb">
                    <button
                      onClick={() => home()}
                      aria-label="Back to overview"
                    >
                      <Map size={15} />
                    </button>
                    {path.map((node, index) => (
                      <span key={node.id}>
                        <ChevronRight size={12} />
                        <button
                          onClick={() => navigate(node.id)}
                          aria-current={
                            index === path.length - 1 ? "page" : undefined
                          }
                        >
                          {node.title}
                        </button>
                      </span>
                    ))}
                  </nav>
                  {domain.id === "behavior" ? (
                    <BehaviorBoard
                      questions={domain.children ?? []}
                      selected={selectedId}
                      expanded={expanded}
                      learned={progress.learned}
                      onSelect={(id) => navigate(id, true)}
                    />
                  ) : <div className="tree-canvas">
                    <div className="canvas-label">
                      <span /> EXPLORE THE CONNECTIONS
                    </div>
                    <ul className="knowledge-tree">
                      <KnowledgeNode
                        node={domain}
                        selected={selectedId}
                        expanded={expanded}
                        learned={progress.learned}
                        onSelect={(id) => navigate(id, true)}
                      />
                    </ul>
                    <div className="canvas-footer">
                      <span>
                        <span className="legend-dot" /> Selected topic
                      </span>
                      <span>
                        Click a node to explore <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>}
                  <div className="map-hint">
                    <Sparkles size={16} />
                    <span>
                      Every connection makes the bigger picture a little
                      clearer.
                    </span>
                    {!panelOpen && (
                      <button
                        className="text-button"
                        onClick={() => setPanelOpen(true)}
                      >
                        Open notes <BookOpen size={14} />
                      </button>
                    )}
                  </div>
                </>
              ) : view === "explore" ? (
                <div className="topic-grid">
                  {knowledge.map((node, index) => (
                    <TopicCard
                      key={node.id}
                      node={node}
                      index={index}
                      learned={progress.learned}
                      onSelect={navigate}
                    />
                  ))}
                </div>
              ) : (
                <div className="progress-page">
                  <div className="progress-summary">
                    <span className="progress-big">
                      {learnedTopics}
                      <small> / {topicCount}</small>
                    </span>
                    <h3>connections made</h3>
                    <p>Every idea you understand is another step forward.</p>
                    <div className="progress-track">
                      <span
                        style={{
                          width: `${(learnedTopics / topicCount) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  {progress.learned.length ? (
                    <div className="learned-list">
                      {progress.learned.map((id) => {
                        const node = allNodes.find((item) => item.id === id)!;
                        return (
                          <button key={id} onClick={() => navigate(id)}>
                            <span className="learned-check">
                              <Check size={16} />
                            </span>
                            <span>
                              {node.title}
                              <small>
                                {findPath(knowledge, id)
                                  .map((item) => item.title)
                                  .join(" / ")}
                              </small>
                            </span>
                            <ArrowUpRight size={16} />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="empty-progress">
                      <Sprout size={35} />
                      <h3>Your journey starts with one idea.</h3>
                      <p>
                        Explore a topic and mark it as learned to see it here.
                      </p>
                      <button
                        className="primary-button"
                        onClick={() => navigate("static-website")}
                      >
                        Discover S3 hosting <ArrowRight size={15} />
                      </button>
                    </div>
                  )}
                </div>
              )}
              <div className="bottom-note">
                <span>✧</span> Not everything is connected yet. That’s the fun
                of learning.
              </div>
            </section>
            {selected && panelOpen ? (
              <DetailPanel
                node={selected}
                theme={theme}
                learned={progress.learned.includes(selected.id)}
                onToggle={toggleLearned}
                onClose={() => setPanelOpen(false)}
              />
            ) : (
              <aside className="journey-panel" aria-label="Learning journey">
                <div className="panel-heading">
                  <span>
                    <Sprout size={16} /> THE LEARNING JOURNEY
                  </span>
                  <Sparkles size={16} />
                </div>
                <div className="journey-intro">
                  <span className="journal-icon">
                    <BookOpen size={28} strokeWidth={1.4} />
                  </span>
                  <h2>
                    One concept
                    <br />
                    at a time.
                  </h2>
                  <p>
                    You don’t need to know everything.
                    <br />
                    Just be curious about the next thing.
                  </p>
                </div>
                <div className="journey-stats">
                  <div>
                    <strong>{knowledge.length}</strong>
                    <span>domains</span>
                  </div>
                  <div>
                    <strong>{topicCount}</strong>
                    <span>topics</span>
                  </div>
                  <div>
                    <strong>{learnedTopics.toString().padStart(2, "0")}</strong>
                    <span>learned</span>
                  </div>
                </div>
                <div className="start-card">
                  <span className="eyebrow">A GOOD PLACE TO START</span>
                  <div>
                    <span className="start-icon">
                      <Icon name="cloud" size={23} />
                    </span>
                    <div>
                      <h3>Your first cloud adventure</h3>
                      <p>AWS · S3 · Static hosting</p>
                    </div>
                  </div>
                  <button onClick={() => navigate("static-website")}>
                    Let’s connect the dots <ArrowRight size={16} />
                  </button>
                </div>
                <div className="recent-section">
                  <h3>
                    {progress.recent.length
                      ? "Recently explored"
                      : "Make yourself at home"}{" "}
                    <span>↗</span>
                  </h3>
                  {progress.recent.length ? (
                    progress.recent.slice(0, 3).map((id) => {
                      const node = allNodes.find((item) => item.id === id)!;
                      return (
                        <button key={id} onClick={() => navigate(id)}>
                          <Icon name={node.icon} size={16} />
                          <span>{node.title}</span>
                          <ChevronRight size={13} />
                        </button>
                      );
                    })
                  ) : (
                    <p>
                      Pick a domain, follow a connection, and find something
                      new.
                    </p>
                  )}
                </div>
                <div className="quote">
                  <span>“</span>
                  <p>
                    The beautiful thing about learning
                    <br />
                    is that nobody can take it away.
                  </p>
                  <small>A LITTLE REMINDER FOR TODAY</small>
                </div>
              </aside>
            )}
          </div>
          <footer>
            <span>
              <Map size={14} /> My Learning Map <i>·</i> Made of curiosity & a
              little bit of code.
            </span>
            <span>
              {storageUnavailable
                ? "Progress is kept for this session only"
                : "Your progress stays in this browser"}
              <span className="footer-flower">✿</span>
            </span>
          </footer>
        </main>
      </div>
      <nav aria-label="Skip navigation">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
      </nav>
      {query && (
        <button
          className="search-dismiss"
          onClick={() => setQuery("")}
          aria-label="Close search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
