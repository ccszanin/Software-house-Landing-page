import React, { FC } from 'react';

interface SvgIconProps {
  name: string;
}

const SvgIcon: FC<SvgIconProps> = ({ name }) => {
  const svgs: Record<string, JSX.Element> = {
    // Define your SVGs here
    // Replace "name1", "name2", etc. with the actual names of your SVGs
    website:  <svg width="51" height="42" viewBox="0 0 51 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.1237 25.9923H5.04614V3.4487C5.04614 2.78437 5.31005 2.14725 5.7798 1.6775C6.24955 1.20775 6.88666 0.943848 7.55099 0.943848H42.6189C43.2832 0.943848 43.9203 1.20775 44.3901 1.6775C44.8598 2.14725 45.1237 2.78437 45.1237 3.4487V25.9923Z" fill="currentColor"/>
                <path d="M10.0556 41.0216H40.1138C42.7711 41.0216 45.3196 39.966 47.1986 38.087C49.0776 36.208 50.1332 33.6595 50.1332 31.0022H0.0362549C0.0362549 33.6595 1.09187 36.208 2.97087 38.087C4.84987 39.966 7.39834 41.0216 10.0556 41.0216Z" fill="currentColor"/>
              </svg>,

    landingpage:  <svg width="27" height="45" viewBox="0 0 27 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6451 44.382C25.2212 44.382 25.7736 44.1532 26.1809 43.7459C26.5882 43.3386 26.817 42.7861 26.817 42.2101V3.11576C26.817 2.53973 26.5882 1.9873 26.1809 1.57998C25.7736 1.17267 25.2212 0.943848 24.6451 0.943848H2.92606C2.35003 0.943848 1.7976 1.17267 1.39029 1.57998C0.982976 1.9873 0.75415 2.53973 0.75415 3.11576V42.2101C0.75415 42.7861 0.982976 43.3386 1.39029 43.7459C1.7976 44.1532 2.35003 44.382 2.92606 44.382H24.6451ZM13.7859 40.0382C14.9854 40.0382 15.9578 39.0659 15.9578 37.8663C15.9578 36.6668 14.9854 35.6944 13.7859 35.6944C12.5864 35.6944 11.614 36.6668 11.614 37.8663C11.614 39.0659 12.5864 40.0382 13.7859 40.0382ZM18.1295 5.28759L20.3014 3.11568H7.26995L9.44186 5.28759H18.1295Z" fill="currentColor"/>
                  </svg>
  };

  // Check if the provided name exists in the svgs object
  if (name in svgs) {
    return svgs[name];
  }

  // Return a placeholder or fallback SVG if the name is not found
  return null
};

export default SvgIcon;