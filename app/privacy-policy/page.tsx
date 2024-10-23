import { Spacer } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/card";

import { title, subtitle } from "@/components/primitives";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <p className={title()}>プライバシーポリシー</p>
      <Spacer y={1} />

      {/* お客様から取得する情報 */}
      <Card>
        <CardBody>
          <p className={subtitle()}>ユーザーから取得する情報</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "氏名(ニックネームやペンネームも含む)",
              "年齢または生年月日",
              "メールアドレス",
              "写真や動画",
              "外部サービスで利用するID、その他外部サービスのプライバシー設定により開示された情報",
              "Cookieを用いた識別情報",
              "OSが生成するID、端末の種類、端末識別子等の端末情報",
              "ウェブサイトの滞在時間、入力履歴、購買履歴などの行動履歴",
              "アプリの起動時間、入力履歴、購買履歴などの利用履歴",
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                ・ {item}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* お客様の情報を利用する目的 */}
      <Card>
        <CardBody>
          <p className={subtitle()}>お客様の情報を利用する目的</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "サービス登録の受付、本人確認、認証",
              "利用履歴の管理",
              "利用料金の決済",
              "行動履歴の分析によるサービスの維持改善",
              "サービスに関する案内",
              "お問い合わせ対応",
              "規約や法令違反行為への対応",
              "サービスの変更、提供中止、契約解除の連絡",
              "規約変更通知",
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                ・ {item}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* 安全管理のために講じた措置 */}
      <Card>
        <CardBody>
          <p className={subtitle()}>安全管理のために講じた措置</p>
          <p>
            安全管理のための措置については、お問い合わせいただければ法令に従い回答いたします。
          </p>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* 第三者提供 */}
      <Card>
        <CardBody>
          <p className={subtitle()}>第三者提供</p>
          <p>
            私は、個人データをお客様の同意なく第三者に提供しませんが、以下の場合を除きます：
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "外部委託の場合",
              "サービスが買収された場合",
              "事業パートナーとの共同利用",
              "法律により許可されている場合",
            ].map((item, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                ・ {item}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* アクセス解析ツール */}
      <Card>
        <CardBody>
          <p className={subtitle()}>アクセス解析ツール</p>
          <p>
            私は「Googleアナリティクス」を利用してアクセス解析を行っています。詳しくは
            <a
              className={"text-primary"}
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              rel="noopener noreferrer"
              target="_blank"
            >
              こちら
            </a>
            をご確認ください。
          </p>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* プライバシーポリシーの変更 */}
      <Card>
        <CardBody>
          <p className={subtitle()}>プライバシーポリシーの変更</p>
          <p>
            私は、必要に応じてプライバシーポリシーを変更することがあり、適切な方法で通知します。
          </p>
        </CardBody>
      </Card>

      <Spacer y={2} />

      {/* お問い合わせ */}
      <Card>
        <CardBody>
          <p className={subtitle()}>お問い合わせ</p>
          <p>
            情報の開示、訂正、利用停止、削除をご希望の場合は、
            <p className={"text-primary"}>
              ucho.ten.bsky+privacy-policy [at] gmail.com
            </p>
            までご連絡ください。
          </p>
        </CardBody>
      </Card>

      <Spacer y={2} />

      <footer>
        <p>2024年10月23日 制定</p>
        <p>ばいそに / baisony</p>
      </footer>
    </div>
  );
}
