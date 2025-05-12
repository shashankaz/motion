"use client";

import { motion } from "motion/react";
import Loading from "@/components/Loading";
import { useDone } from "@/store/store";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { done } = useDone();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative"
      >
        {children}
      </motion.div>
      {!done && (
        <div className="fixed inset-0 z-50">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default RootLayout;
