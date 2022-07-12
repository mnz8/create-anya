import downloadGitRepo from "download-git-repo";
import { wrapLoading } from "./utils.js";
import { promisify } from "util";

const d = promisify(downloadGitRepo); // downloadGitRepo promise 化

class Creator {
  constructor(projectName, targetPath) {
    this.name = projectName;
    this.target = targetPath;
  }

  async download() {
    const requestUrl = `github:line126/react-bench-lane`;
    await wrapLoading(d, "wait download repo ...", requestUrl, this.target);
  }
}

export default Creator;
