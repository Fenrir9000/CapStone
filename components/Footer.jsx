import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div id="About" className={styles.container}>
			<div className={styles.item}>
				<Image src="/img/flash.png" objectFit="cover" layout="fill" alt="" />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>
						We created this restaurant in the honour of the flash. We fell in
						love with the character flash when we watched the justice league.
						This is for all the Flash fans out there who wants to try some of
						the speedster pizza.
					</h2>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
					<p className={styles.text}>
						170 Queen Street.
						<br /> Ottawa, ON K1P 5E1
						<br /> (905) 887-1111
					</p>
					<p className={styles.text}>
						256 Bremner Blvd.
						<br /> Toronto, ON M5V 3M9
						<br /> (416) 222-1311
					</p>
					<p className={styles.text}>
						181 Enterprise Blvd.
						<br /> Markham, ON L6G 0G4
						<br /> (905) 605-7777
					</p>
					<p className={styles.text}>
						3250 Midland Ave.
						<br /> Scarborough, ON M1V 0C4
						<br /> (647) 355-8790
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>WORKING HOURS</h1>
					<p className={styles.text}>
						MONDAY UNTIL FRIDAY
						<br /> 9:00am – 12:00am
					</p>
					<p className={styles.text}>
						SATURDAY - SUNDAY
						<br /> 12:00pm – 12:00am
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
