import type { StaticImageData } from "next/image";

export function resolveMediaSrc(image: string | StaticImageData): string {
  return typeof image === "string" ? image : image.src;
}

/**
 * What the stock hero photos actually show, keyed by the photo id in the
 * local file name (public/images/photo-<id>.jpg, originally from ).
 * Each entry was written from viewing the image. Add an entry when a new
 * photo is introduced; unknown photos fall back to the page subject alone.
 */
const STOCK_PHOTO_DESCRIPTIONS: Record<string, string> = {
  "1451187580459-43490279c0fa":
    "Earth at night seen from orbit, with city lights",
  "1460925895917-afdab827c52f":
    "Laptop showing an analytics dashboard with charts",
  "1504384308090-c894fdcc538d":
    "Open-plan office with rows of people working at desks",
  "1512941937669-90a1b58e7e9c": "Smartphone home screen with app icons",
  "1519389950473-47ba0277781c":
    "Overhead view of a team working on laptops and phones at a shared desk",
  "1521737711867-e3b97375f902":
    "Developers working on laptops at a shared table",
  "1522071820081-009f0129c71c": "Team collaborating on laptops around a table",
  "1531746790731-6c087fecd65a": "White robotic hand reaching forward",
  "1550751827-4bd374c3f58b": "Close-up of an illuminated circuit board",
  "1551288049-bebda4e38f71": "Laptop screen showing data charts and metrics",
  "1552566626-52f8b828add9":
    "Restaurant dining room with tables and pendant lights",
  "1552664730-d307ca884978":
    "Team planning session with sticky notes on a wall",
  "1555066931-4365d14bab8c": "Code editor open on a laptop screen",
  "1558655146-9f40138edfeb": "Designer sketching on a tablet with a stylus",
  "1561070791-2526d30994b5":
    "Colour swatches and design palette cards on a desk",
  "1639762681485-074b7f938ba0": "3D render of linked blocks forming a network",
  "1675627451054-99b6c760b6d2": "Abstract 3D render of interlocking cubes",
  "1677442136019-21780ecad995": "3D letters spelling AI on a digital grid",
};

function stockPhotoDescription(src?: string) {
  const id = src?.match(/\/images\/photo-([0-9a-f]+-[0-9a-f]+)\.jpg/i)?.[1];
  return id ? STOCK_PHOTO_DESCRIPTIONS[id] : undefined;
}

/**
 * Alt text for a page's hero photo: what the photo shows plus the service it
 * illustrates, so the same stock photo reads differently on each page.
 */
export function heroImageAlt(subject: string, src?: string) {
  const name = subject.trim();
  const shown = stockPhotoDescription(src);
  return shown ? `${shown}, illustrating ${name}` : name;
}
