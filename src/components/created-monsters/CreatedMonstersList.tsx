import { Grid } from "@mui/material";
import { MonsterCardList } from "../monster-card/MonsterCardList";
import { Monster } from "../../models/interfaces/monster.interface";

interface MonstersListProps {
  monsters: Monster[];
  onDelete: (id: string) => void;
}

export const CreatedMonstersList = ({
  monsters,
  onDelete,
}: MonstersListProps) => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={2}
      data-testid="cards-container"
    >
      {monsters.map((monster: Monster) => (
        <Grid key={monster.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <MonsterCardList monster={monster} handleDelete={onDelete} />
        </Grid>
      ))}
    </Grid>
  );
};
