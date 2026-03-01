import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateMonsterForm } from "./CreateMonsterForm";
import { CreatedMonsterFormTestIds } from "../../constants/data-testids";

describe("CreateMonsterForm", () => {
  it("renders without error", () => {
    let getMonsterInfoMock;

    getMonsterInfoMock = vi.fn();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    const elements = {
      name: screen.getByTestId(CreatedMonsterFormTestIds.name),
      hp: screen.getByTestId(CreatedMonsterFormTestIds.hp),
      attack: screen.getByTestId(CreatedMonsterFormTestIds.attack),
      defense: screen.getByTestId(CreatedMonsterFormTestIds.defense),
      speed: screen.getByTestId(CreatedMonsterFormTestIds.speed),
      btn: screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    };
    expect(elements.name).toBeInTheDocument();
    expect(elements.hp).toBeInTheDocument();
    expect(elements.attack).toBeInTheDocument();
    expect(elements.defense).toBeInTheDocument();
    expect(elements.speed).toBeInTheDocument();
    expect(elements.btn).toBeInTheDocument();
  });

  it("displays an alert and disables create monster button when there is an empty field", async () => {
    let getMonsterInfoMock = vi.fn();
    const user = userEvent.setup();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    await user.type(
      screen.getByTestId(CreatedMonsterFormTestIds.name),
      "Dead Unicorn",
    );
    fireEvent.click(
      screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    );

    const alert = screen.getByTestId(CreatedMonsterFormTestIds.alert);
    const disabledBtn = screen.getByTestId(
      CreatedMonsterFormTestIds.createMonsterBtn,
    );

    expect(alert).toBeInTheDocument();
    expect(disabledBtn).toBeDisabled();
  });

  it("enables create monster button if all fields are complete", async () => {
    const getMonsterInfoMock = vi.fn();
    const user = userEvent.setup();
    render(<CreateMonsterForm getMonsterInfo={getMonsterInfoMock} />);

    const elements = {
      name: screen.getByTestId(CreatedMonsterFormTestIds.name),
      hp: screen.getByTestId(CreatedMonsterFormTestIds.hp),
      attack: screen.getByTestId(CreatedMonsterFormTestIds.attack),
      defense: screen.getByTestId(CreatedMonsterFormTestIds.defense),
      speed: screen.getByTestId(CreatedMonsterFormTestIds.speed),
      btn: screen.getByTestId(CreatedMonsterFormTestIds.createMonsterBtn),
    };

    await user.type(elements.name, "Dead Unicorn");
    await user.type(elements.hp, "80");
    await user.type(elements.attack, "75");
    await user.type(elements.speed, "90");
    await user.type(elements.defense, "100");

    fireEvent.click(elements.btn);
    expect(elements.btn).toBeInTheDocument();
  });
});
