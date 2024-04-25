/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const filenames = {
    "es": "fascino.es.js",
    "umd": "fascino.umd.js",
    "iife": "fascino.min.js"
}

export default defineConfig({
    define: process.env.VITEST ? {} : { global: 'window' },
    base: "./",
    publicDir: "docs/",
    test: {
        include:["tests/**/*.test.ts"],
        environment: 'jsdom',
        typecheck: {
            enabled: true,
        },
        coverage: {
            provider: "v8"
        }
    },
    plugins: [
        banner(
            `/*!\n * ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author.name} (${pkg.author.url})\n * homepage: ${pkg.homepage}\n * License: ${pkg.license}\n */`
        )
    ],
    build: {
        outDir: "./dist/",
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "FascinoTs",
            formats: ["es", "umd", "iife"],
            fileName: (format: string) => filenames[format]
        }
    },
    preview: {
        port: 8080
    }
});    