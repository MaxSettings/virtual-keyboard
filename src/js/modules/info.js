export const createInfo = () => {
  const info = document.createElement('div');
  const osDesc = document.createElement('p');
  const langDesc = document.createElement('p');
  info.classList.add('info');
  osDesc.textContent = 'Designed for Windows';
  langDesc.textContent = 'Change language: Shift + Alt';

  info.append(osDesc);
  info.append(langDesc);

  return info;
}