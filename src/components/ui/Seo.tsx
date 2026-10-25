import { useEffect } from "react";
import { site } from "../../lib/content";

type Props = { title?: string; description?: string; path: string; image?: string; type?: "website" | "article" };

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Atualiza title, description, Open Graph e canonical a cada rota. */
export default function Seo({ title, description = site.description, path, image, type = "website" }: Props) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${site.brand}` : site.title;
    const url = `${site.url}${path === "/" ? "" : path}`;
    const img = image ? (image.startsWith("http") ? image : `${site.url}${image}`) : `${site.url}/assets/og-image.png`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", img);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", img);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, path, image, type]);

  return null;
}
