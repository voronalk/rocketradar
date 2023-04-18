import styles from "./missionSummary.module.css";
import Link from "next/link";
import { Launch } from "@/lib/interface";
import DateTime, {dateFormats} from "../date";

export default function MissionSummary({
  children,
  launch,
}: {
  children?: React.ReactNode;
  launch: Launch;
}) {
  return (
    <div className={styles.container}>
      <p>Launch name: {launch.name}</p>
      <p>
        Provider :{" "}
        <Link href={`/providers/${launch.provider.slug}`}>
          {launch.provider.name}
        </Link>
      </p>
      <p>
        Vehicle:{" "}
        <Link href={`/rockets/${launch.vehicle.slug}`}>
          {launch.vehicle.name}
        </Link>
      </p>
      <p>
        Location: {launch.pad.location.name ? launch.pad.location.name : null}
      </p>
      <p>Pad: {launch.pad.name}</p>
      <p>Counrty: {launch.pad.location.country}</p>
      {launch.pad.location.state ? (
        <p>State: {launch.pad.location.statename} </p>
      ) : null}
      <p>
        Date: <DateTime seconds={parseInt(launch.sort_date)} dateFormat={dateFormats.missionSummary}></DateTime>
      </p>
      <div>{children}</div>
    </div>
  );
}
