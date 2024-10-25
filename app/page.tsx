'use client';

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { Carousel } from "react-responsive-carousel"; // Carouselインポート
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons/faInternetExplorer";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import ucho_ten_logo from "@/public/ucho-ten-logo.png";
import home_tab_img from "@/public/screenshots/home_tab.png";
import feeds_tab_img from "@/public/screenshots/feeds_tab.png";
import inbox_tab_img from "@/public/screenshots/inbox_tab.png";
import profile_tab_img from "@/public/screenshots/profile_tab.png";
import drawer_img from "@/public/screenshots/drawer.png";
import qr_page_img from "@/public/screenshots/qr_page.png";
import post_page_img from "@/public/screenshots/post_page.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // スタイルをインポート

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make it&nbsp;</span>
        <span className={title({ color: "foreground" })}>simpler&nbsp;</span>
        <br />
        <span className={title()}>more&nbsp;</span>
        <span className={title({ color: "blue" })}>cooler&nbsp;</span>
        <br />
        <span className={title()}>and more&nbsp;</span>
        <span className={title({ color: "cyan" })}>ZEN&nbsp;</span>
        <div className={subtitle({ class: "mt-4" })}>
          <span>
            by{" "}
            <Image
              alt={"Ucho-ten logo"}
              className={"object-scale-down h-6"}
              src={ucho_ten_logo}
            />
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/how-to-beta-android"
        >
          <FontAwesomeIcon icon={faAndroid} size={"xl"} />
          Google Play [beta]
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={process.env.NEXT_PUBLIC_IOS_TESTFLIGHT_URL}
        >
          <FontAwesomeIcon icon={faApple} size={"xl"} />
          App Store [beta]
        </Link>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"https://ucho-ten.net/"}
        >
          <FontAwesomeIcon icon={faInternetExplorer} size={"xl"} />
          Web App [ legacy ]
        </Link>
      </div>
      <div className={"inline-block max-w-full md:max-w-md text-center justify-center mt-14"}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <div>
              <span className={title()}>Home</span>
            </div>
            <Image alt={"Home Tab"} src={home_tab_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Feeds</span>
            </div>
            <Image alt={"Feeds Tab"} src={feeds_tab_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Inbox</span>
            </div>
            <Image alt={"Inbox Tab"} src={inbox_tab_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Profile</span>
            </div>
            <Image alt={"Profile Tab"} src={profile_tab_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Drawer</span>
            </div>
            <Image alt={"Drawer"} src={drawer_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Quickly share</span>
            </div>
            <Image alt={"QR Page"} src={qr_page_img} className={"p-8"} />
          </div>
          <div>
            <div>
              <span className={title()}>Post</span>
            </div>
            <Image alt={"QR Page"} src={post_page_img} className={"p-8"} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
