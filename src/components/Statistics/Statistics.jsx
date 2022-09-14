import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { randomColor } from 'js/RandomColor';

export const Statistics = ({ title, stats }) => {
  const {
    statistics,
    statsCard,
    statsTitle,
    statsList,
    statsItem,
    statsLabel,
    statsPercentage,
  } = styles;
  let statsItemWidth = (100 / stats.length).toString() + '%';
    // console.log(statsItemWidth);
    
  return (
    <section className={statistics}>
          <div className={statsCard}
              style={{ backgroundColor: randomColor() }}>
              
        {title && <h2 className={statsTitle}>{title}</h2>}

        <ul className={statsList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={statsItem}
              style={{
                backgroundColor: randomColor(),
                width: statsItemWidth,
              }}
            >
              <span className={statsLabel}>{label}</span>
              <span className={statsPercentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};