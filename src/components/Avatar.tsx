import { site } from "@/data/site";
import SafeImg from "./SafeImg";

// Round photo. Shows "SK" initials until /public/photo.jpg exists.
export default function Avatar() {
  return (
    <div className="avatar">
      <span>{site.initials}</span>
      <SafeImg src={site.photo} alt={site.name} />
    </div>
  );
}
