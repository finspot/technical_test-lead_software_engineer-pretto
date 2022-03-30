import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "../components/Header";
import { Main } from "../components/Main";

const subject = () =>
  render(
    <>
      <Header />
      <Main />
    </>
  );

test("displays content", async () => {
  subject();

  await screen.findByRole("link", { name: "Taux immobilier" });
  await screen.findByText("En savoir plus");
  await screen.findByRole("link", { name: "FAQ" });
  await screen.findByRole("link", { name: "Contact" });

  await screen.findByRole("heading", { name: "Le baromètre des taux" });
});

test("can expand sub-menu", async () => {
  subject();

  const button = await screen.findByText("En savoir plus");
  const outside = await screen.findByRole("link", {
    name: "Taux immobilier",
  });
  const link = await screen.findByText("Comment ça marche ?");

  expect(link).not.toBeVisible();

  userEvent.click(button);
  await waitFor(() => expect(link).toBeVisible());

  await new Promise((resolve) => {
    // hack to ensure the transition on the sub-menu is complete
    // before clicking again on the button
    setTimeout(resolve, 0);
  });

  userEvent.click(outside);
  await waitFor(() => expect(link).not.toBeVisible());
});
