#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import run from "../lib/run.js";

const program = new Command("rb");

program
  .version("0.0.1", "-v, --version", "output the current version")
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")}`)
  .action((projectName) => {
    run(projectName);
  });

program.parse(process.argv);
