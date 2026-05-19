import { useEffect, useState } from "react";

import { smoothScrollTo } from "../../utils/smoothScroll";

export default function Navbar({ activeSection }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "frontend", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (id) => {
    smoothScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(7,9,15,0.72)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(31,41,55,0.45)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigation("experience")}
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            color: "#fff",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            cursor: "none",
          }}
        >
          Full-stack
          <span style={{ color: "#818cf8" }}>Developer</span>
        </button>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div
              style={{
                display: "flex",
                gap: 32,
              }}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`nav-link${
                    activeSection === section.id ? " active" : ""
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Status */}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                className="btn-ghost"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  className="pulse-dot"
                  style={{
                    display: "inline-block",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#34d399",
                  }}
                />
                Open to Work
              </button>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              border: "1px solid rgba(99,102,241,0.18)",
              background: "rgba(99,102,241,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#fff",
                  borderRadius: 999,
                }}
              />

              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#fff",
                  borderRadius: 999,
                }}
              />

              <span
                style={{
                  width: 18,
                  height: 2,
                  background: "#fff",
                  borderRadius: 999,
                }}
              />
            </div>
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            padding: "12px 24px 20px",
            borderTop: "1px solid rgba(31,41,55,0.45)",
            background: "rgba(7,9,15,0.96)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigation(section.id)}
              className={`nav-link${
                activeSection === section.id ? " active" : ""
              }`}
              style={{
                textAlign: "left",
              }}
            >
              {section.label}
            </button>
          ))}

          <button
            className="btn-ghost"
            style={{
              marginTop: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            Open to Work
          </button>
        </div>
      )}
    </nav>
  );
}
