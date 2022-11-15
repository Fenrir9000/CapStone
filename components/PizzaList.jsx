import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
	return (
		<div id="Menu" className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>
				These are the Pizza we think best represent each of the speedster.
			</p>
			<div className={styles.wrapper}>
				{pizzaList.map((pizza) => (
					<PizzaCard key={pizza._id} pizza={pizza} />
				))}
			</div>
		</div>
	);
};

export default PizzaList;
