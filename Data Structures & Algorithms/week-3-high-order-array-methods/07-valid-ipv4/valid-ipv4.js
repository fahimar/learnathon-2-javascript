const isValidIPb4 = (input) => {
  const octets = input.split(".");

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octets) => {
    const num = parseInt(octets);
    return num >= 0 && num <= 255 && octets === num.toString();
  });
};

module.exports = isValidIPb4;
