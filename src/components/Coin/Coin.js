import Card from "../UI/Card";
import classes from "./Coin.module.css";

const Coin = (props) => {
  return (
    <Card className={classes.coinInfo}>
      <img
        className={classes.coinIcon}
        src={props.coinIcon}
        alt={props.coinName}
      />
      <h1 className={classes.coinName}>{props.coinName}</h1>
      <p className={classes.coinSymbol}>Symbol: {props.coinSymbol}</p>
      <p className={classes.coinPrice}>Current Price: {props.coinPrice} $</p>
      {props.coinChange < 0 && (
        <p className={classes.priceChangeRed}>Market Cap: {props.coinChange}</p>
      )}
      {props.coinChange > 0 && (
        <p className={classes.priceChangeGreen}>
          Market Cap: {props.coinChange}
        </p>
      )}

      <p className={classes.coinVolume}>Total Volume: {props.CoinVolume}</p>
    </Card>
  );
};

export default Coin;
