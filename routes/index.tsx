import { HtmlHead } from "../components/layout/HtmlHead.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await fetch(
      `https://knf-example.deno.dev/api/short/list`,
    );
    if (resp.status !== 200) {
      return ctx.render(null);
    }
    const user = await resp.json();
    return ctx.render(user);
  },
};

const Home = ({ data }: PageProps) => {
  const sorted =
    data?.items?.sort((a: any, b: any) => b.date.localeCompare(a.date)) ||
    [];

  const date = data?.lastUpdated
    ? new Date(data.lastUpdated).toLocaleString("pl-PL", {
      timeZone: "UTC",
    }).split(",")[0].toString()
    : "no data";

  return (
    <>
      <HtmlHead />
      <div class="ui container">
        <h1 class="ui center aligned header">KNF Shorts</h1>
        <p>
          Data: <strong>{date}</strong>
        </p>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Papier</th>
              <th>Wartość</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((it: any) => (
              <tr>
                <td>{it.name}</td>
                <td>{it.paper}</td>
                <td>{it.value}</td>
                <td>{it.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
