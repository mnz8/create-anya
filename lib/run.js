import path from "path";
import fs from "fs-extra";
import inquirer from "inquirer";
import Creator from "./Creator.js";

export default async (projectName) => {
  const cwd = process.cwd();
  const targetPath = path.join(cwd, projectName);

  if (fs.existsSync(targetPath)) {
    const { action } = await inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "Target directory already exists,please choose an action:",
        choices: [
          {
            name: "Overwrite",
            value: "overwrite",
          },
          {
            name: "Cancel",
            value: false,
          },
        ],
      },
    ]);

    if (action) {
      console.log("\r\nRemoving ...");
      await fs.remove(targetPath);
    } else {
      return;
    }
  }

  const creator = new Creator(projectName, targetPath);
  creator.download();
};
