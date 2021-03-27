export const shortLink = async (fullLink: string) => {
  return new Promise<string>((res) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${fullLink}`)
      .then((data) => data.json())
      .then(({ result }) => result.full_short_link)
      .then(res)
      .catch(console.log);
  });
};

export const shortString = (str: string, to: number) => str.length < to
  ? str
  : `${str.slice(0, to)}...`;
