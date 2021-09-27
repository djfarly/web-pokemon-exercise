const root = document.querySelector('#root');

export const render = (htmlString) => {
  root.innerHTML = htmlString;
};
