import { Head } from "$fresh/runtime.ts";

const HtmlHead = () => {
  return (
    <Head>
      <title>KNF Shorts</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css"
      />
      <link
        rel="stylesheet"
        href="/main.css"
      />
    </Head>
  );
};

export { HtmlHead };
