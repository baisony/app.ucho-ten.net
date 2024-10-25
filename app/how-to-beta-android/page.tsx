import { subtitle, title } from "@/components/primitives";
import { Card } from "@nextui-org/card";

export default function HowToBetaAndroid() {
  return (
    <div>
      <h1 className={title()}>How to join BETA Access</h1>
      <p>
        To join the BETA program, please follow the instructions below.
      </p>
      <h2 className={title()}>Android</h2>
      <div className={"text-left"}>
        <Card className={"mt-14 p-6"}>
          <div className={subtitle()}>1. Access to Google Group, and join group</div>
          <li className={subtitle()}>1. Google Group にアクセス後、「グループに参加」</li>
          <a href={"https://groups.google.com/g/ucho-ten-for-android-beta"} target={"_blank"}
             className={"text-blue-700"}>https://groups.google.com/g/ucho-ten-for-android-beta</a>
          <div>
            Please be assured that the names and e-mail addresses of all other participants will not be viewable.
          </div>
          <div>なお、他の参加者の名前やメールアドレスは一切閲覧できないようにしていますのでご安心ください。</div>
          <li className={subtitle()}>or, Search Group for "Ucho-ten for Android beta"</li>
          <li className={subtitle()}>または「Ucho-ten for Android beta」と検索し、参加</li>
          <a href={"https://groups.google.com/my-groups"}
             target={"_blank"}
             className={"text-blue-700"}
          >https://groups.google.com/my-groups</a>
        </Card>
        <Card className={"mt-14 p-6"}>
          <li className={subtitle()}>2. Access to Google Play beta link</li>
          <li className={subtitle()}>2. 下記のリンクからベータテスターとして登録</li>
          <a href={process.env.NEXT_PUBLIC_ANDROID_JOIN_BETA_URL} target={"_blank"}
             className={"text-blue-700"}>{process.env.NEXT_PUBLIC_ANDROID_JOIN_BETA_URL}</a>
        </Card>
        <Card className={"mt-14 p-6"}>
          <li className={subtitle()}>3. Install App</li>
          <li className={subtitle()}>3. アプリをインストール</li>
          <a href={process.env.NEXT_PUBLIC_ANDROID_PLAYSTORE_URL} target={"_blank"}
             className={"text-blue-700"}>{process.env.NEXT_PUBLIC_ANDROID_PLAYSTORE_URL}</a>
        </Card>
      </div>
    </div>
  );
}
