import { Grid } from "@mui/material";
import Coin from "./Coin";

import classes from "./CoinGrid.module.css";

const CoinGrid = (props) => {
  return (
    <div className={classes.container}>
      <Grid className={classes.grid} container spacing={3}>
        {props.coinData.map((coin) => {
          return (
            <Grid key={coin.id} className={classes.container} item xs={3}>
              <Coin
                coinIcon={coin.image}
                coinName={coin.name}
                coinSymbol={coin.symbol}
                coinPrice={coin.current_price}
                coinChange={coin.price_change_percentage_24h}
                CoinVolume={coin.market_cap}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CoinGrid;
