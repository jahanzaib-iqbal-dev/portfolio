"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./StatsCounter.module.scss";

type StatItem = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  theme: "brand" | "dark" | "light";
};

const defaultStats: StatItem[] = [
  {
    value: 7,
    prefix: "",
    suffix: "+",
    label: "stats.years.label",
    sublabel: "stats.years.sublabel",
    theme: "brand",
  },
  {
    value: 1,
    prefix: "$",
    suffix: "M+",
    label: "stats.arr.label",
    sublabel: "stats.arr.sublabel",
    theme: "dark",
  },
  {
    value: 40,
    prefix: "",
    suffix: "+",
    label: "stats.engineers.label",
    sublabel: "stats.engineers.sublabel",
    theme: "light",
  },
];

function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  isInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 14 },
  },
};

export const StatsCounter = ({
  items,
  useTranslationKeys = true,
}: { items?: StatItem[]; useTranslationKeys?: boolean } = {}) => {
  const { t } = useLanguage();
  const stats = items || defaultStats;
  const isDefaultStats = !items;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const resolveLabel = (label: string) => {
    if (isDefaultStats || useTranslationKeys) {
      const translated = t(label);
      return translated !== label ? translated : label;
    }
    return label;
  };

  return (
    <motion.div
      ref={ref}
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className={`${styles.card} ${styles[stat.theme]}`}
          variants={itemVariants}
        >
          <div className={styles.decoration} />
          <div className={styles.value}>
            <CountUpNumber
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              isInView={isInView}
            />
          </div>
          <div className={styles.labelGroup}>
            <span className={styles.label}>{resolveLabel(stat.label)}</span>
            <span className={styles.sublabel}>{resolveLabel(stat.sublabel)}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
