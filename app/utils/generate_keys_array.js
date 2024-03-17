export default (target, positions = [0, target.length -1]) => {
    const keys = Object.keys(target);
    return keys.slice(positions[0], positions[1]);
  };