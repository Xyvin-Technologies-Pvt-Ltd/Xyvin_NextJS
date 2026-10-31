import type { StaticImageData } from "next/image";
import special40 from "@/assets/img/new_brand1.svg";
import doubleHorse from "@/assets/img/new_brand2.svg";
import basari from "@/assets/img/new_brand3.svg";
import tayima from "@/assets/img/new_brand4.svg";
import gaia from "@/assets/img/new_brand5.svg";
import visitingCard from "@/assets/img/new_brand6.svg";
import pravasiTax from "@/assets/img/new_brand7.svg";
import goec from "@/assets/img/new_brand8.svg";
import atlantis from "@/assets/img/new_brand9.svg";
import azavista from "@/assets/img/new_brand10.svg";
import akcaf from "@/assets/img/ACKAF.png";
import itcc from "@/assets/img/ITCC (1).png";
import ipa from "@/assets/img/IPA (1).png";
import khedmah from "@/assets/img/Khedmah (1).png";
import kssia from "@/assets/img/KSSIA.png";
import skopick from "@/assets/img/Skopick.png";
import worko from "@/assets/img/Frame 1485460.png";
import myg from "@/assets/img/myg-logo__2_ 1.png";
import skybertech from "@/assets/img/Subtract.png";
import kk from "@/assets/img/logo kk 2.png";

export interface Client {
  name: string;
  logo: StaticImageData;
}

// Clients and partner organisations whose logos appear on the site (identified from the logo files).
export const clients: Client[] = [
  { name: "GOEC", logo: goec },
  { name: "KSSIA", logo: kssia },
  { name: "myG", logo: myg },
  { name: "Khedmah", logo: khedmah },
  { name: "Double Horse", logo: doubleHorse },
  { name: "Indo Transworld Chamber of Commerce", logo: itcc },
  { name: "International Promoters Association", logo: ipa },
  { name: "AKCAF", logo: akcaf },
  { name: "Azavista", logo: azavista },
  { name: "Basari Opticals", logo: basari },
  { name: "Atlantis Medical", logo: atlantis },
  { name: "Special40", logo: special40 },
  { name: "Worko", logo: worko },
  { name: "KK", logo: kk },
  { name: "Skopick", logo: skopick },
  { name: "Skybertech", logo: skybertech },
  { name: "PravasiTax", logo: pravasiTax },
  { name: "Tayima", logo: tayima },
  { name: "GAIA Sanctuary", logo: gaia },
  { name: "visitingcard.store", logo: visitingCard },
];

export default clients;
