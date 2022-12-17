import { UnknownPageProps } from "$fresh/server.ts";
import { HtmlHead } from "../components/layout/HtmlHead.tsx";

const NotFound = ({ url }: UnknownPageProps) => {
  return (
    <>
      <HtmlHead />

      <div class="ui middle aligned center aligned grid">
        <div className="column">
          <div class="err-404">
            <h1 class="err-404__title">404</h1>
            <p class="err-404__desc">
              <span class="err-404__path">{url.pathname}</span> not found...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
