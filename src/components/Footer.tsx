import Link from "next/link";

export default async function Footer() {
  const navigation1 = new Map();
  navigation1.set("id", 1);
  navigation1.set("link", "Link 1");
  navigation1.set("label", "Label 1");

  const navigation2 = new Map();
  navigation1.set("id", 2);
  navigation2.set("link", "Link 2");
  navigation2.set("label", "Label 2");

  const navigation3 = new Map();
  navigation1.set("id", 3);
  navigation3.set("link", "Link 3");
  navigation3.set("label", "Label 3");

  const navigationArr = [navigation1, navigation2, navigation3];

  return (
    <footer>
      <Link href="/">Footer</Link>

      <p>{new Date().getFullYear()}</p>

      <nav>
        <ul key="footer-navigation">
          {navigationArr.map((navi) => (
            <li key={navi.get("id")}>
              <Link href='{navi.get("link")}'>{navi.get("label")}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
