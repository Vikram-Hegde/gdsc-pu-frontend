import styles from './style.module.css';
import { useState } from 'react';

export default function Team({members, categories}) {
	let [activeCategory, setActiveCategory] = useState('Management');
	return (
		<div className={styles.tabsWrapper}>
			<div className={styles.tabs}>
				{categories.map((category) => (
					<button
						className={category === activeCategory ? styles.active : ''}
						onClick={() => setActiveCategory(category)}
						key={category}
					>
						{category}
					</button>
				))}
			</div>
			<div className={styles.displayMembers}>
				{members.map(
					(member) =>
						member.dept === activeCategory && (
							<div className={styles.member} key={member.name}>
								<img
									className={styles.memberPic}
									src={
										member.img ? member.img : 'https://via.placeholder.com/150'
									}
								></img>
								<div className={styles.memberName}>{member.name}</div>
								<div className={styles.memberDesignation}>{member.pos}</div>
							</div>
						)
				)}
			</div>
		</div>
	);
}
