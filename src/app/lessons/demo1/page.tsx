import Image from "next/image";
import styles from "../../../components/Demo1.module.css";

/**
 * http://localhost:3000/lessons/demo1
 */

export default function Demo1() {
  return (
    <div className={styles.card}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="font-display text-5xl">Demo 1</h1>
        </main>
      </div>
    </div>
  );
}
