import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple & Straightforward',
    Svg: require('@site/static/img/git.svg').default,
    description: (
      <>
        A minimal documentation site that lists Git commands and their purpose.
        Clean, fast, and focused — no unnecessary clutter.
      </>
    ),
  },
  {
    title: 'Built with CI/CD',
    Svg: require('@site/static/img/cicd.svg').default,
    description: (
      <>
        This project demonstrates a basic CI/CD workflow using GitHub Actions
        and Docker — automatically building and deploying after every change.
      </>
    ),
  },
  {
    title: 'Open & Extensible',
    Svg: require('@site/static/img/contribute.svg').default,
    description: (
      <>
     This project is open-source — feel free to fork and explore the code!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
