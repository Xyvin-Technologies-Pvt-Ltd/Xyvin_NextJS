import type { StaticImageData } from "next/image";
import special40 from "@/assets/img/new_brand1.svg";
import doubleHorse from "@/assets/img/new_brand2.svg";
import basari from "@/assets/img/new_brand3.svg";
import tayima from "@/assets/img/new_brand4.svg";
import gaia from "@/assets/img/new_brand5.svg";
import visitingCard from "@/assets/img/new_brand6.svg";
import pravasiTax from "@/assets/img/clients/pravasitax.png";
import goec from "@/assets/img/new_brand8.svg";
import twentyFourNews from "@/assets/img/clients/24-news.png";
import ipaConnect from "@/assets/img/clients/ipa-connect.png";
import akcaf from "@/assets/img/ACKAF.png";
import itcc from "@/assets/img/ITCC (1).png";
import khedmah from "@/assets/img/Khedmah (1).png";
import mmc from "@/assets/img/clients/mmc.png";
import skopick from "@/assets/img/Skopick.png";
import worko from "@/assets/img/Frame 1485460.png";
import myg from "@/assets/img/myg-logo__2_ 1.png";
import skybertech from "@/assets/img/clients/skybertech.png";
import kk from "@/assets/img/logo kk 2.png";
import livaInsurance from "@/assets/img/clients/liva-insurance.png";
import exctel from "@/assets/img/clients/exctel.png";
import kangarooCare from "@/assets/img/clients/kangaroo-care.png";
import iao from "@/assets/img/clients/iao.png";

export interface Client {
  name: string;
  logo: StaticImageData;
}

// Clients and partner organisations whose logos appear on the site (identified from the logo files).
// The first 14 appear on the homepage.
export const clients: Client[] = [
  { name: "GOEC", logo: goec },
  { name: "Liva Insurance", logo: livaInsurance },
  { name: "Exctel", logo: exctel },
  { name: "Kangaroo Care", logo: kangarooCare },
  { name: "Million Malayali Club", logo: mmc },
  { name: "International Academy of Osteopathy", logo: iao },
  { name: "IPA Connect", logo: ipaConnect },
  { name: "myG", logo: myg },
  { name: "24 News", logo: twentyFourNews },
  { name: "Khedmah", logo: khedmah },
  { name: "Indo Transworld Chamber of Commerce", logo: itcc },
  { name: "Double Horse", logo: doubleHorse },
  { name: "PravasiTax", logo: pravasiTax },
  { name: "Skybertech", logo: skybertech },
  { name: "AKCAF", logo: akcaf },
  { name: "Basari Opticals", logo: basari },
  { name: "Special40", logo: special40 },
  { name: "Worko", logo: worko },
  { name: "KK", logo: kk },
  { name: "Skopick", logo: skopick },
  { name: "Tayima", logo: tayima },
  { name: "GAIA Sanctuary", logo: gaia },
  { name: "visitingcard.store", logo: visitingCard },
];

export default clients;
