import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main id="main" className="bg-midnight py-32 text-white">
      <Container className="text-center">
        <p className="font-mono text-sm text-ice">{"// 404"}</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page could not be found.</h1>
        <p className="mx-auto mt-5 max-w-md text-mist">The link may be outdated or the page may have moved.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back to home</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
