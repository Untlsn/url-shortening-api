export const shortLink = async (fullLink: string) => {
  return new Promise<string>((res, rej) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${fullLink}`)
      .then((data) => data.json())
      .then((data) => {
        if(!data.ok) rej('link don\'t exist');
        return data;
      })
      .then(({ result }) => result?.full_short_link)
      .then(res);
  });
};

export const shortString = (str: string, to: number) => str.length < to
  ? str
  : `${str.slice(0, to)}...`;
