import classes from "./CoinFilter.module.css";

const CoinFilter = (props) => {
  const searchHandler = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className={classes.coinFilter}>
      <input className={classes.input} type="text" onChange={searchHandler} />
    </div>
  );
};

export default CoinFilter;
