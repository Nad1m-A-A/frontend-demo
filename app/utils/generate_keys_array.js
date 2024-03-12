export default (target, positions) => {
    const keys = Object.keys(target);
    return keys.slice(positions[0], positions[1]);
  };