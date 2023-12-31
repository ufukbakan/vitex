import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        threads: true,
        coverage: {
            provider: "istanbul",
            reporter: ["html", "json", "text"],
            include: ["**/*.[tj]s?(x)"],
            exclude: ["src/router.ts", "src/main.tsx", "test/helpers.tsx"],
            all: true
        },
        reporters: ["junit", "verbose"],
        outputFile: "./coverage/junit.xml",
    }
});