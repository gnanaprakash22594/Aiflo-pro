import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import "./RadialOrbitalTimeline.css";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, setViewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200; // This could be made responsive or prop-driven
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };



  return (
    <div
      className="rot-container"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="rot-wrapper">
        <div
          className="rot-orbit-plane"
          ref={orbitRef}
          style={{
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center Element */}
          <div className="rot-center-node">
            <div className="rot-center-ping-1"></div>
            <div
              className="rot-center-ping-2"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="rot-center-content">

            </div>
          </div>

          <div className="rot-orbit-track"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className={`rot-node ${isExpanded ? "expanded" : ""}`}
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`rot-node-energy ${isPulsing ? "pulsing" : ""}`}
                  style={{
                    width: `60px`,
                    height: `60px`,
                    left: `-10px`,
                    top: `-10px`,
                  }}
                ></div>

                {/* Node Circle */}
                <div
                  className={`rot-node-circle ${isExpanded
                    ? "circle-expanded"
                    : isRelated
                      ? "circle-related"
                      : "circle-default"
                    }`}
                >
                  <Icon size={16} />
                </div>

                {/* Node Label */}
                <div
                  className={`rot-node-label ${isExpanded ? "label-expanded" : "label-default"
                    }`}
                >
                  {item.title}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <div className="rot-card">
                    <div className="rot-card-header">
                      <div className="rot-card-meta">
                        <span className="rot-badge automation-badge">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="rot-card-title">{item.cardTitle}</h3>
                    </div>
                    <div className="rot-card-content">
                      <p>{item.content}</p>

                      <div className="rot-energy-section">
                        <div className="rot-energy-header">
                          <span className="flex-center">
                            <Zap size={10} className="mr-1" />
                            Automation Coverage
                          </span>
                        </div>
                        <div className="rot-coverage-info">
                          <span className="rot-coverage-label">{item.coverageLabel}</span>
                          <span className="rot-coverage-value">{item.coverageValue}</span>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="rot-related-section">
                          <div className="rot-related-header">
                            <Link size={10} className="mr-1 opacity-70" />
                            <h4>Triggers Next</h4>
                          </div>
                          <div className="rot-related-tags">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === Number(relatedId)
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="rot-related-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(Number(relatedId));
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 opacity-60" />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
