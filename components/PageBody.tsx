import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { HtmlTags } from "./HtmlTags";

export default function PageBody(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
) {
  return (
    <main className="d-flex flex-column h-100">
      {HtmlTags(`<html>`, "")}
      {HtmlTags(`<body>`, "margin-left")}
      <div className="margin-left d-flex flex-column justify-content-center flex-grow">
        {children}
      </div>
      {HtmlTags(`</body>`, "margin-left")}
      {HtmlTags(`</html>`, "")}
    </main>
  );
}
