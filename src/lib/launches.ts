import fs from "fs";
import path from "path";
import { getAllMissionsIds } from "./posts";
import { RocketAPIResponse, Launch } from "./interface";

const missionsFolder = path.join(process.cwd(), "missions");
const fetchFolder = path.join(process.cwd());

function saveMissions(json: RocketAPIResponse) {
  const ids = getAllMissionsIds().map(missionId => missionId.params.slug);
  const result = json.result;
  result.forEach((e) => {
    if (ids.indexOf(e.slug.toString()) === -1) {
      const fileName = `${missionsFolder}/${e.slug}.json`;
      fs.writeFile(fileName, JSON.stringify(e), () => {
        console.log(`${e.name} saved to ${fileName}`);
      });
    }
  });
}

export function devGetRecentLaunches() {
  const fullPath = path.join(fetchFolder, `recent_fetch.json`);
  const data = fs.readFileSync(fullPath, "utf-8");
  const json: RocketAPIResponse = JSON.parse(data);
  saveMissions(json);
  return json;
}

export async function getRecentLaunches() {
  const res = await fetch("https://fdo.rocketlaunch.live/json/launches/next/5");
  const json: RocketAPIResponse = await res.json();
  fs.writeFile(
    `${fetchFolder}/recent_fetch.json`,
    JSON.stringify(json),
    (err) => {
      if (err) throw err;
      console.log("Data saved to file");
    }
  );
  saveMissions(json);
  return json;
}

export function getLaunchData(slug: string) {
  const fullPath = path.join(missionsFolder, `${slug}.json`);
  try {
    const data = fs.readFileSync(fullPath, "utf8");
    const obj: Launch = JSON.parse(data);
    return obj;
  } catch (err) {
    console.error(err);
    return -1;
  }
}
