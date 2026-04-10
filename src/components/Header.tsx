"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, Row, ToggleButton, Column, Text, Icon } from "@once-ui-system/core";

import { routes, display, person } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", icon: "home", label: t("nav.home"), exact: true },
    { path: "/about", icon: "person", label: t("nav.about") },
    { path: "/work", icon: "grid", label: t("nav.work") },
    { path: "/blog", icon: "book", label: t("nav.blog") },
    { path: "/services", icon: "sparkle", label: t("nav.services") },
    { path: "/team", icon: "person", label: t("nav.team") },
    { path: "/contact", icon: "email", label: t("nav.contact") },
  ].filter((item) => routes[item.path as keyof typeof routes]);

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />

      {/* ── Mobile full-screen menu overlay ── */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: "var(--page-background)",
              borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
              padding: "16px 16px calc(100px + env(safe-area-inset-bottom))",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.4)",
              animation: "slideUp 0.25s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle */}
            <div
              style={{
                width: 40,
                height: 4,
                borderRadius: 2,
                backgroundColor: "var(--neutral-alpha-medium)",
                margin: "0 auto 20px",
              }}
            />

            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {navItems.map((item) => {
                const isSelected = item.exact
                  ? pathname === item.path
                  : pathname.startsWith(item.path);
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    style={{ textDecoration: "none" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "14px 16px",
                        borderRadius: "var(--radius-m)",
                        backgroundColor: isSelected ? "var(--neutral-alpha-weak)" : "transparent",
                        transition: "background-color 0.15s",
                      }}
                    >
                      <Icon
                        name={item.icon}
                        size="m"
                        onBackground={isSelected ? "neutral-strong" : "neutral-weak"}
                      />
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected
                            ? "var(--neutral-on-background-strong)"
                            : "var(--neutral-on-background-weak)",
                        }}
                      >
                        {item.label}
                      </span>
                      {isSelected && (
                        <div style={{ marginLeft: "auto" }}>
                          <Icon name="check" size="s" onBackground="brand-strong" />
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Divider + utilities */}
            <div
              style={{
                height: 1,
                backgroundColor: "var(--neutral-alpha-weak)",
                margin: "12px 0",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 16px",
              }}
            >
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--neutral-on-background-weak)",
                }}
              >
                {display.time && <TimeDisplay timeZone={person.location} />}
              </span>
              <div style={{ display: "flex", gap: 8 }}>
                {display.themeSwitcher && <ThemeToggle />}
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Header bar ── */}
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
        data-border="rounded"
        s={{ position: "fixed" }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Row s={{ hide: true }}>{person.location}</Row>}
        </Row>

        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            {/* ── Desktop nav ── */}
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
              s={{ hide: true }}
            >
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <ToggleButton
                  prefixIcon="person"
                  href="/about"
                  label={t("nav.about")}
                  selected={pathname === "/about"}
                />
              )}
              {routes["/work"] && (
                <ToggleButton
                  prefixIcon="grid"
                  href="/work"
                  label={t("nav.work")}
                  selected={pathname.startsWith("/work")}
                />
              )}
              {routes["/blog"] && (
                <ToggleButton
                  prefixIcon="book"
                  href="/blog"
                  label={t("nav.blog")}
                  selected={pathname.startsWith("/blog")}
                />
              )}
              {routes["/services"] && (
                <ToggleButton
                  prefixIcon="sparkle"
                  href="/services"
                  label={t("nav.services")}
                  selected={pathname.startsWith("/services")}
                />
              )}
              {routes["/team"] && (
                <ToggleButton
                  prefixIcon="person"
                  href="/team"
                  label={t("nav.team")}
                  selected={pathname.startsWith("/team")}
                />
              )}
              {routes["/contact"] && (
                <ToggleButton
                  prefixIcon="email"
                  href="/contact"
                  label={t("nav.contact")}
                  selected={pathname.startsWith("/contact")}
                />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <LanguageToggle />
            </Row>

            {/* ── Mobile nav: Home + Hamburger + Language ── */}
            <Row
              hide
              s={{ hide: false }}
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <LanguageToggle />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 10px",
                  borderRadius: "var(--radius-s)",
                  color: "var(--neutral-on-background-strong)",
                }}
                aria-label="Open navigation menu"
              >
                {isMenuOpen ? (
                  <Icon name="close" size="m" />
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect y="3" width="20" height="2" rx="1" />
                    <rect y="9" width="20" height="2" rx="1" />
                    <rect y="15" width="20" height="2" rx="1" />
                  </svg>
                )}
              </button>
            </Row>
          </Row>
        </Row>

        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex s={{ hide: true }}>
              {display.time && <TimeDisplay timeZone={person.location} />}
            </Flex>
          </Flex>
        </Flex>
      </Row>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </>
  );
};
