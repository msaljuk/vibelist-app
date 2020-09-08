export const getActivityIconSrc = (activityType) => {
  switch (activityType) {
    case 'BAKE':
      return require('../../../assets/icons/BAKE.png');
    case 'DRAW':
      return require('../../../assets/icons/DRAW.png');
    case 'EAT':
      return require('../../../assets/icons/EAT.png');
    case 'EXERCISE':
      return require('../../../assets/icons/EXERCISE.png');
    case 'LISTEN':
      return require('../../../assets/icons/LISTEN.png');
    case 'MAKE':
      return require('../../../assets/icons/MAKE.png');
    case 'MEET':
      return require('../../../assets/icons/MEET.png');
    case 'PLAY':
      return require('../../../assets/icons/PLAY.png');
    case 'READ':
      return require('../../../assets/icons/READ.png');
    case 'STUDY':
      return require('../../../assets/icons/STUDY.png');
    case 'VISIT':
      return require('../../../assets/icons/VISIT.png');
    case 'WATCH':
      return require('../../../assets/icons/WATCH.png');
    default:
      return undefined;
  }
};
