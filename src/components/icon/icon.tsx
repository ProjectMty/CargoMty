import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';

const Icon = ({
  lookup: [prefix, iconName],
}: {
  lookup: [IconLookup['prefix'], IconLookup['iconName']];
}) => {
  const iconDefinition: IconDefinition = findIconDefinition({
    prefix,
    iconName,
  });

  return <FontAwesomeIcon icon={iconDefinition} />;
};

export default Icon;
