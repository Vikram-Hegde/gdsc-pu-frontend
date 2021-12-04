import styles from "./style.module.css";
import { useState } from "react";

const qa = [
	{
		question: "Lorem ipsum dolor emet",
		answer:
			"lorem ipsum dolor emet, lorem dolor emet ipsum. Dolor emet ipsum emet",
	},
	{
		question: "Lorem ipsum dolor emet",
		answer:
			"lorem ipsum dolor emet, lorem dolor emet ipsum. Dolor emet ipsum emet",
	},
	{
		question: "Lorem ipsum dolor emet",
		answer:
			"lorem ipsum dolor emet, lorem dolor emet ipsum. Dolor emet ipsum emet",
	},
	{
		question: "Lorem ipsum dolor emet",
		answer:
			"lorem ipsum dolor emet, lorem dolor emet ipsum. Dolor emet ipsum emet",
	},
];

export default function Accordian() {
	const [visible, toggleVisible] = useState(0);

	const handleVisibility = (index) =>
		toggleVisible(index === visible ? -1 : index);

	return (
		<div className="accordianGroup">
			{qa.map(({ question, answer }, index) => {
				return (
					<div
						className={styles.accordianItem}
						key={index}
						onClick={() => handleVisibility(index)}
					>
						<div className={styles.accordianQuestionWrapper}>
							<div className={styles.accordianQuestion}>{question}</div>
							<div className={styles.accordianIndicator}>
								{visible === index ? "-" : "+"}
							</div>
						</div>
						{visible === index ? (
							<div className={styles.accordianAnswer}>{answer}</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
}
